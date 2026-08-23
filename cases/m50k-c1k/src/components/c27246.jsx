import React from 'react';
const LABEL_27246 = 'component_27246';
export function Component27246({ value = 27246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27246, 'data-value': derived.doubled }, children);
}
export default Component27246;
