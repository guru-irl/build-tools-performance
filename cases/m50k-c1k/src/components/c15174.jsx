import React from 'react';
const LABEL_15174 = 'component_15174';
export function Component15174({ value = 15174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15174, 'data-value': derived.doubled }, children);
}
export default Component15174;
