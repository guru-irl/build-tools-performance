import React from 'react';
const LABEL_17070 = 'component_17070';
export function Component17070({ value = 17070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17070, 'data-value': derived.doubled }, children);
}
export default Component17070;
