import React from 'react';
const LABEL_34531 = 'component_34531';
export function Component34531({ value = 34531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34531, 'data-value': derived.doubled }, children);
}
export default Component34531;
