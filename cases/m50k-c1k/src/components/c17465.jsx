import React from 'react';
const LABEL_17465 = 'component_17465';
export function Component17465({ value = 17465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17465, 'data-value': derived.doubled }, children);
}
export default Component17465;
