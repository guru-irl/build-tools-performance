import React from 'react';
const LABEL_17896 = 'component_17896';
export function Component17896({ value = 17896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17896, 'data-value': derived.doubled }, children);
}
export default Component17896;
