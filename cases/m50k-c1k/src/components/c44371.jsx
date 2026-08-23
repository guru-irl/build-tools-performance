import React from 'react';
const LABEL_44371 = 'component_44371';
export function Component44371({ value = 44371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44371, 'data-value': derived.doubled }, children);
}
export default Component44371;
