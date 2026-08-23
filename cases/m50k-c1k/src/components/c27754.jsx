import React from 'react';
const LABEL_27754 = 'component_27754';
export function Component27754({ value = 27754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27754, 'data-value': derived.doubled }, children);
}
export default Component27754;
