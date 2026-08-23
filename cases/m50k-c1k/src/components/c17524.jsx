import React from 'react';
const LABEL_17524 = 'component_17524';
export function Component17524({ value = 17524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17524, 'data-value': derived.doubled }, children);
}
export default Component17524;
