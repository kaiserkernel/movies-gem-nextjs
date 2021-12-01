import * as React from 'react';

function SvgBuy({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 23 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M22.58 4.668a.877.877 0 00-.702-.327H9.388a.913.913 0 00-.913.912c0 .491.421.912.912.912h11.369l-1.03 5.684a2.432 2.432 0 01-2.386 1.988H8.452L5.996 1.37A.95.95 0 005.083.62H1.481a.913.913 0 00-.912.913c0 .49.42.912.912.912h2.854l2.41 12.21a2.814 2.814 0 00-.843 1.988 2.815 2.815 0 002.807 2.807 2.815 2.815 0 002.807-2.807c0-.35-.07-.655-.164-.959h3.58a2.67 2.67 0 00-.165.96 2.815 2.815 0 002.807 2.806 2.815 2.815 0 002.807-2.807c0-.655-.21-1.24-.584-1.707.912-.632 1.59-1.59 1.8-2.76l1.24-6.784c-.023-.234-.093-.514-.257-.725zm-12.912 12a.963.963 0 01-.959.959.979.979 0 01-.959-.96.98.98 0 01.959-.958c.515 0 .96.42.96.959zm7.883.959a.963.963 0 01-.96-.96c0-.514.445-.958.96-.958a.98.98 0 01.959.959.979.979 0 01-.96.959z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBuy;
