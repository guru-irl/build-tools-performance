import React from 'react';
const LABEL_17172 = 'component_17172';
export function Component17172({ value = 17172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17172, 'data-value': derived.doubled }, children);
}
export default Component17172;
