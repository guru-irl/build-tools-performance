import React from 'react';
const LABEL_7761 = 'component_7761';
export function Component7761({ value = 7761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7761, 'data-value': derived.doubled }, children);
}
export default Component7761;
