import React from 'react';
const LABEL_3238 = 'component_3238';
export function Component3238({ value = 3238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3238, 'data-value': derived.doubled }, children);
}
export default Component3238;
