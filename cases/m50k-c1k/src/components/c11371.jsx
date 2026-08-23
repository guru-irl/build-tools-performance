import React from 'react';
const LABEL_11371 = 'component_11371';
export function Component11371({ value = 11371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11371, 'data-value': derived.doubled }, children);
}
export default Component11371;
