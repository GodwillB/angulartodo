import { Injectable } from '@angular/core';

@Injectable()
export class SnackbarService {
  showSnackbar(
    message: string,
    actionHandler?: () => void,
    actionText?: string
  ): void {
    document.querySelector('#menu-snackbar').MaterialSnackbar.showSnackbar({
      message,
      actionHandler,
      actionText
    });
  }
}
