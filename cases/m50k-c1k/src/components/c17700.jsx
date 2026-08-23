import React from 'react';
const LABEL_17700 = 'component_17700';
export function Component17700({ value = 17700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17700, 'data-value': derived.doubled }, children);
}
export default Component17700;
