import React from 'react';
const LABEL_17181 = 'component_17181';
export function Component17181({ value = 17181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17181, 'data-value': derived.doubled }, children);
}
export default Component17181;
