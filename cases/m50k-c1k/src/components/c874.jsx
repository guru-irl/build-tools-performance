import React from 'react';
const LABEL_874 = 'component_874';
export function Component874({ value = 874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_874, 'data-value': derived.doubled }, children);
}
export default Component874;
