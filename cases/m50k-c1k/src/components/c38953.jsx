import React from 'react';
const LABEL_38953 = 'component_38953';
export function Component38953({ value = 38953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38953, 'data-value': derived.doubled }, children);
}
export default Component38953;
