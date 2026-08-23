import React from 'react';
const LABEL_36885 = 'component_36885';
export function Component36885({ value = 36885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36885, 'data-value': derived.doubled }, children);
}
export default Component36885;
