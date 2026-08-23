import React from 'react';
const LABEL_38517 = 'component_38517';
export function Component38517({ value = 38517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38517, 'data-value': derived.doubled }, children);
}
export default Component38517;
