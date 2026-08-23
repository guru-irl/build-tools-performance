import React from 'react';
const LABEL_34648 = 'component_34648';
export function Component34648({ value = 34648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34648, 'data-value': derived.doubled }, children);
}
export default Component34648;
