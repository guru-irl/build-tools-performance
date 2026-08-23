import React from 'react';
const LABEL_17202 = 'component_17202';
export function Component17202({ value = 17202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17202, 'data-value': derived.doubled }, children);
}
export default Component17202;
