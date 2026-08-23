import React from 'react';
const LABEL_17188 = 'component_17188';
export function Component17188({ value = 17188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17188, 'data-value': derived.doubled }, children);
}
export default Component17188;
