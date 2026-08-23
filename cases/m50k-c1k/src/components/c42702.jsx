import React from 'react';
const LABEL_42702 = 'component_42702';
export function Component42702({ value = 42702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42702, 'data-value': derived.doubled }, children);
}
export default Component42702;
