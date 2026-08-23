import React from 'react';
const LABEL_17909 = 'component_17909';
export function Component17909({ value = 17909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17909, 'data-value': derived.doubled }, children);
}
export default Component17909;
