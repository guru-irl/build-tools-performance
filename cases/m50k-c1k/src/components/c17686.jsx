import React from 'react';
const LABEL_17686 = 'component_17686';
export function Component17686({ value = 17686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17686, 'data-value': derived.doubled }, children);
}
export default Component17686;
