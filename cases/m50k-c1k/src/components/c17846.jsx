import React from 'react';
const LABEL_17846 = 'component_17846';
export function Component17846({ value = 17846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17846, 'data-value': derived.doubled }, children);
}
export default Component17846;
