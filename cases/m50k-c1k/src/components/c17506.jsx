import React from 'react';
const LABEL_17506 = 'component_17506';
export function Component17506({ value = 17506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17506, 'data-value': derived.doubled }, children);
}
export default Component17506;
