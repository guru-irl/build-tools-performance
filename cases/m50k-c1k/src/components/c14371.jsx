import React from 'react';
const LABEL_14371 = 'component_14371';
export function Component14371({ value = 14371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14371, 'data-value': derived.doubled }, children);
}
export default Component14371;
