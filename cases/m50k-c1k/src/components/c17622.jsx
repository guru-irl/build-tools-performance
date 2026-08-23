import React from 'react';
const LABEL_17622 = 'component_17622';
export function Component17622({ value = 17622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17622, 'data-value': derived.doubled }, children);
}
export default Component17622;
