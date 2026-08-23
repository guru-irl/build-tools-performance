import React from 'react';
const LABEL_3174 = 'component_3174';
export function Component3174({ value = 3174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3174, 'data-value': derived.doubled }, children);
}
export default Component3174;
