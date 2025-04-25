import { toast as sonnerToast } from 'sonner'

type ToastOptions = {
  description?: string
  duration?: number
}

export const toast = {
  success: (title: string, options?: ToastOptions) => {
    sonnerToast.success(title, {
      description: options?.description,
      duration: options?.duration || 4000,
    })
  },
  error: (title: string, options?: ToastOptions) => {
    sonnerToast.error(title, {
      description: options?.description,
      duration: options?.duration || 4000,
    })
  },
  info: (title: string, options?: ToastOptions) => {
    sonnerToast.info(title, {
      description: options?.description,
      duration: options?.duration || 4000,
    })
  },
  warning: (title: string, options?: ToastOptions) => {
    sonnerToast.warning(title, {
      description: options?.description,
      duration: options?.duration || 4000,
    })
  },
}

export const useToast = () => {
  return toast
}