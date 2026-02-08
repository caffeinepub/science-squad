import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface InquiryData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: InquiryData) => {
      if (!actor) {
        throw new Error('Backend actor not initialized');
      }

      await actor.submitInquiry(data.name, data.phone, data.email, data.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
  });
}
