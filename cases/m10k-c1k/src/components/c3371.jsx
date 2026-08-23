import React from 'react';
const LABEL_3371 = 'component_3371';
export function Component3371({ value = 3371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3371, 'data-value': derived.doubled }, children);
}
export default Component3371;
