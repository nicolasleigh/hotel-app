import { useQuery } from '@tanstack/react-query';
// import { getSettings } from '../../services/apiSettings';
import { getSettings } from '../../api/settings';

export function useSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ['settings'],
    queryFn: getSettings,
  });
  return { isLoading, error, settings };
}
