import React from 'react';
const LABEL_28371 = 'component_28371';
export function Component28371({ value = 28371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28371, 'data-value': derived.doubled }, children);
}
export default Component28371;
