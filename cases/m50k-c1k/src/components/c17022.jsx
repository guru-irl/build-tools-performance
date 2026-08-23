import React from 'react';
const LABEL_17022 = 'component_17022';
export function Component17022({ value = 17022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17022, 'data-value': derived.doubled }, children);
}
export default Component17022;
