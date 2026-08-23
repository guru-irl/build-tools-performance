import React from 'react';
const LABEL_10874 = 'component_10874';
export function Component10874({ value = 10874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10874, 'data-value': derived.doubled }, children);
}
export default Component10874;
