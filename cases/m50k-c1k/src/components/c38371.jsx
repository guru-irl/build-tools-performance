import React from 'react';
const LABEL_38371 = 'component_38371';
export function Component38371({ value = 38371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38371, 'data-value': derived.doubled }, children);
}
export default Component38371;
