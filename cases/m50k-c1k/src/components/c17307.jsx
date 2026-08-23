import React from 'react';
const LABEL_17307 = 'component_17307';
export function Component17307({ value = 17307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17307, 'data-value': derived.doubled }, children);
}
export default Component17307;
