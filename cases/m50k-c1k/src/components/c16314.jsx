import React from 'react';
const LABEL_16314 = 'component_16314';
export function Component16314({ value = 16314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16314, 'data-value': derived.doubled }, children);
}
export default Component16314;
