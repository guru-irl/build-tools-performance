import React from 'react';
const LABEL_17322 = 'component_17322';
export function Component17322({ value = 17322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17322, 'data-value': derived.doubled }, children);
}
export default Component17322;
