type APIResponseState = 'loading' | 'success' | 'error';

function handleResponse(state: APIResponseSate) {
  switch(state) {
    case 'loading':
      console.log('loading');
      break;
      case 'success':
        console.log('success');
        break;
        case 'error':
          console.log('error');
          break;
  }
}

handleResponse('loading');
handleResponse('success');
handleResponse('error');