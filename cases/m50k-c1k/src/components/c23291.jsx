import React from 'react';
const LABEL_23291 = 'component_23291';
export function Component23291({ value = 23291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23291, 'data-value': derived.doubled }, children);
}
export default Component23291;
