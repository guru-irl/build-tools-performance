import React from 'react';
const LABEL_32427 = 'component_32427';
export function Component32427({ value = 32427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32427, 'data-value': derived.doubled }, children);
}
export default Component32427;
