/*
 * creating five functions with creating new account cycle
 */

// validation function

function isEmail(email: string) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (email.match(emailRegex)) return true;

  return false;
}

// transform

function stringToNumber(str: string) {
  if (!/^[+-]?\d+(\.\d+)?$/.test(str)) throw new Error("It's not number!");
  return Number(str);
}

function neSpaceTxt(data: string) {
  const splitTxt = data.split(' ');
  return `${splitTxt[0]} ${splitTxt[1]}`;
}

function emailToLowerCase(email: string) {
  return email.toLowerCase();
}

// async fetch mock

type MockApiResponse<T> = {
  ok: boolean;
  status: number;
  data?: T;
  error?: string;
};

async function fetchMock<T>(data: T, shouldFail = false): Promise<MockApiResponse<T>> {
  await new Promise(resolve => setTimeout(resolve, 500));

  if (shouldFail) {
    return {
      ok: false,
      status: 500,
      error: 'Mock server error',
    };
  }

  return {
    ok: true,
    status: 200,
    data,
  };
}
