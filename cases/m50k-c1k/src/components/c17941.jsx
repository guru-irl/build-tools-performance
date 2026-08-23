import React from 'react';
const LABEL_17941 = 'component_17941';
export function Component17941({ value = 17941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17941, 'data-value': derived.doubled }, children);
}
export default Component17941;
