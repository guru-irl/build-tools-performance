import React from 'react';
const LABEL_38885 = 'component_38885';
export function Component38885({ value = 38885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38885, 'data-value': derived.doubled }, children);
}
export default Component38885;
