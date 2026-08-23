import React from 'react';
const LABEL_14233 = 'component_14233';
export function Component14233({ value = 14233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14233, 'data-value': derived.doubled }, children);
}
export default Component14233;
