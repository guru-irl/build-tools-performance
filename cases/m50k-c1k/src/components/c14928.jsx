import React from 'react';
const LABEL_14928 = 'component_14928';
export function Component14928({ value = 14928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14928, 'data-value': derived.doubled }, children);
}
export default Component14928;
