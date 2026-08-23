import React from 'react';
const LABEL_7622 = 'component_7622';
export function Component7622({ value = 7622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7622, 'data-value': derived.doubled }, children);
}
export default Component7622;
