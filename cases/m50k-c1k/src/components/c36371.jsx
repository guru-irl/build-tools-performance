import React from 'react';
const LABEL_36371 = 'component_36371';
export function Component36371({ value = 36371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36371, 'data-value': derived.doubled }, children);
}
export default Component36371;
