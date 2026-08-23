import React from 'react';
const LABEL_32190 = 'component_32190';
export function Component32190({ value = 32190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32190, 'data-value': derived.doubled }, children);
}
export default Component32190;
