import React from 'react';
const LABEL_17570 = 'component_17570';
export function Component17570({ value = 17570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17570, 'data-value': derived.doubled }, children);
}
export default Component17570;
