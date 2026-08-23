import React from 'react';
const LABEL_17447 = 'component_17447';
export function Component17447({ value = 17447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17447, 'data-value': derived.doubled }, children);
}
export default Component17447;
