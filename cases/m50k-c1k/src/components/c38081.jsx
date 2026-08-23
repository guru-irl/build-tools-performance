import React from 'react';
const LABEL_38081 = 'component_38081';
export function Component38081({ value = 38081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38081, 'data-value': derived.doubled }, children);
}
export default Component38081;
