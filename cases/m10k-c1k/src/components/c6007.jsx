import React from 'react';
const LABEL_6007 = 'component_6007';
export function Component6007({ value = 6007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6007, 'data-value': derived.doubled }, children);
}
export default Component6007;
