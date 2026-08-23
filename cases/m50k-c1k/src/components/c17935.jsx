import React from 'react';
const LABEL_17935 = 'component_17935';
export function Component17935({ value = 17935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17935, 'data-value': derived.doubled }, children);
}
export default Component17935;
