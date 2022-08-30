import * as React from 'react';

function SvgTwitter({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.187 15.359C.187 6.876 7.063 0 15.545 0c8.483 0 15.359 6.876 15.359 15.359 0 8.482-6.876 15.358-15.359 15.358C7.063 30.717.187 23.841.187 15.36zm14.898-2.875l.032.531-.537-.065c-1.955-.25-3.663-1.095-5.113-2.516l-.71-.705-.182.52c-.387 1.161-.14 2.387.666 3.21.43.456.333.521-.408.25-.258-.086-.484-.152-.505-.119-.075.076.182 1.063.387 1.453.279.543.848 1.074 1.471 1.389l.527.249-.623.01c-.602 0-.623.012-.559.24.215.704 1.064 1.453 2.009 1.778l.666.228-.58.347c-.86.499-1.87.78-2.88.803-.483.01-.88.054-.88.086 0 .109 1.31.716 2.073.955 2.288.705 5.006.401 7.048-.803 1.45-.857 2.9-2.56 3.577-4.208.365-.878.73-2.484.73-3.254 0-.499.033-.564.634-1.16.355-.347.688-.727.753-.835.107-.206.096-.206-.452-.022-.913.325-1.042.282-.59-.206.332-.347.73-.976.73-1.16 0-.033-.161.021-.344.119-.193.108-.623.27-.945.368l-.58.185-.527-.358c-.29-.195-.698-.412-.913-.477-.548-.152-1.386-.13-1.88.043-1.343.488-2.191 1.746-2.095 3.124z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTwitter;
