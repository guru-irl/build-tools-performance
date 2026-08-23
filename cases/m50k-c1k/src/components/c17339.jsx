import React from 'react';
const LABEL_17339 = 'component_17339';
export function Component17339({ value = 17339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17339, 'data-value': derived.doubled }, children);
}
export default Component17339;
