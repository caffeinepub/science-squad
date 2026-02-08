import List "mo:core/List";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";

actor {
  let inquiriesList = List.empty<Inquiry>();

  type Inquiry = {
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, email : Text, message : Text) : async () {
    if (name == "" or email == "" or message == "") {
      Runtime.trap("Name, email, and message fields are required");
    };

    let timestamp = Time.now();
    let newInquiry : Inquiry = {
      name;
      phone;
      email;
      message;
      timestamp;
    };

    inquiriesList.add(newInquiry);
  };
};
