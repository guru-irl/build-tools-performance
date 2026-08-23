import React from 'react';
const LABEL_20885 = 'component_20885';
export function Component20885({ value = 20885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20885, 'data-value': derived.doubled }, children);
}
export default Component20885;
