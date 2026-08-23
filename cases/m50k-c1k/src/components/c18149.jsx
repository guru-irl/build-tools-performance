import React from 'react';
const LABEL_18149 = 'component_18149';
export function Component18149({ value = 18149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18149, 'data-value': derived.doubled }, children);
}
export default Component18149;
