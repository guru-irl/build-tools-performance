import React from 'react';
const LABEL_42779 = 'component_42779';
export function Component42779({ value = 42779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42779, 'data-value': derived.doubled }, children);
}
export default Component42779;
