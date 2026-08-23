import React from 'react';
const LABEL_15885 = 'component_15885';
export function Component15885({ value = 15885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15885, 'data-value': derived.doubled }, children);
}
export default Component15885;
