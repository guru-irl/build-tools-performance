import React from 'react';
const LABEL_17191 = 'component_17191';
export function Component17191({ value = 17191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17191, 'data-value': derived.doubled }, children);
}
export default Component17191;
