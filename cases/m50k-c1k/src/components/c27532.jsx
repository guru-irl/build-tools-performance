import React from 'react';
const LABEL_27532 = 'component_27532';
export function Component27532({ value = 27532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27532, 'data-value': derived.doubled }, children);
}
export default Component27532;
