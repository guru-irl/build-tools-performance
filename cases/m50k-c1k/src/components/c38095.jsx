import React from 'react';
const LABEL_38095 = 'component_38095';
export function Component38095({ value = 38095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38095, 'data-value': derived.doubled }, children);
}
export default Component38095;
