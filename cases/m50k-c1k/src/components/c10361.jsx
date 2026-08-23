import React from 'react';
const LABEL_10361 = 'component_10361';
export function Component10361({ value = 10361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10361, 'data-value': derived.doubled }, children);
}
export default Component10361;
