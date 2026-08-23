import React from 'react';
const LABEL_3065 = 'component_3065';
export function Component3065({ value = 3065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3065, 'data-value': derived.doubled }, children);
}
export default Component3065;
