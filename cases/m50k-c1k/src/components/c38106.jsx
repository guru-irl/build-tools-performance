import React from 'react';
const LABEL_38106 = 'component_38106';
export function Component38106({ value = 38106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38106, 'data-value': derived.doubled }, children);
}
export default Component38106;
