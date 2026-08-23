import React from 'react';
const LABEL_13885 = 'component_13885';
export function Component13885({ value = 13885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13885, 'data-value': derived.doubled }, children);
}
export default Component13885;
