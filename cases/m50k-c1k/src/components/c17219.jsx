import React from 'react';
const LABEL_17219 = 'component_17219';
export function Component17219({ value = 17219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17219, 'data-value': derived.doubled }, children);
}
export default Component17219;
