import React from 'react';
const LABEL_13064 = 'component_13064';
export function Component13064({ value = 13064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13064, 'data-value': derived.doubled }, children);
}
export default Component13064;
