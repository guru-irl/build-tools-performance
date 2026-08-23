import React from 'react';
const LABEL_38209 = 'component_38209';
export function Component38209({ value = 38209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38209, 'data-value': derived.doubled }, children);
}
export default Component38209;
