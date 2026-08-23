import React from 'react';
const LABEL_11531 = 'component_11531';
export function Component11531({ value = 11531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11531, 'data-value': derived.doubled }, children);
}
export default Component11531;
