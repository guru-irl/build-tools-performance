import React from 'react';
const LABEL_17050 = 'component_17050';
export function Component17050({ value = 17050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17050, 'data-value': derived.doubled }, children);
}
export default Component17050;
