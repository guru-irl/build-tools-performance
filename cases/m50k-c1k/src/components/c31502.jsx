import React from 'react';
const LABEL_31502 = 'component_31502';
export function Component31502({ value = 31502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31502, 'data-value': derived.doubled }, children);
}
export default Component31502;
