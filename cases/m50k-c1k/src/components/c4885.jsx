import React from 'react';
const LABEL_4885 = 'component_4885';
export function Component4885({ value = 4885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4885, 'data-value': derived.doubled }, children);
}
export default Component4885;
