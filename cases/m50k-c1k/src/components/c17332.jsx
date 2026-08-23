import React from 'react';
const LABEL_17332 = 'component_17332';
export function Component17332({ value = 17332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17332, 'data-value': derived.doubled }, children);
}
export default Component17332;
