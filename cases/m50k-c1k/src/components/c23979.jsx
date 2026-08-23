import React from 'react';
const LABEL_23979 = 'component_23979';
export function Component23979({ value = 23979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23979, 'data-value': derived.doubled }, children);
}
export default Component23979;
