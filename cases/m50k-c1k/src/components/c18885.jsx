import React from 'react';
const LABEL_18885 = 'component_18885';
export function Component18885({ value = 18885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18885, 'data-value': derived.doubled }, children);
}
export default Component18885;
