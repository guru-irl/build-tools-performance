import React from 'react';
const LABEL_27336 = 'component_27336';
export function Component27336({ value = 27336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27336, 'data-value': derived.doubled }, children);
}
export default Component27336;
