import React from 'react';
const LABEL_17586 = 'component_17586';
export function Component17586({ value = 17586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17586, 'data-value': derived.doubled }, children);
}
export default Component17586;
