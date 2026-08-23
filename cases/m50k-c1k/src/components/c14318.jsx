import React from 'react';
const LABEL_14318 = 'component_14318';
export function Component14318({ value = 14318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14318, 'data-value': derived.doubled }, children);
}
export default Component14318;
