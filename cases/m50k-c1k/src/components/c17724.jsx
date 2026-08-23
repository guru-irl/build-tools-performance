import React from 'react';
const LABEL_17724 = 'component_17724';
export function Component17724({ value = 17724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17724, 'data-value': derived.doubled }, children);
}
export default Component17724;
