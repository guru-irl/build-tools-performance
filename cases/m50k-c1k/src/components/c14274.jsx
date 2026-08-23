import React from 'react';
const LABEL_14274 = 'component_14274';
export function Component14274({ value = 14274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14274, 'data-value': derived.doubled }, children);
}
export default Component14274;
