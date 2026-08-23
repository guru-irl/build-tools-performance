import React from 'react';
const LABEL_17209 = 'component_17209';
export function Component17209({ value = 17209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17209, 'data-value': derived.doubled }, children);
}
export default Component17209;
