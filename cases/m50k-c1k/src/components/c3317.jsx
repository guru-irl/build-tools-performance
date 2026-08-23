import React from 'react';
const LABEL_3317 = 'component_3317';
export function Component3317({ value = 3317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3317, 'data-value': derived.doubled }, children);
}
export default Component3317;
