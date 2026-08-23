import React from 'react';
const LABEL_44885 = 'component_44885';
export function Component44885({ value = 44885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44885, 'data-value': derived.doubled }, children);
}
export default Component44885;
