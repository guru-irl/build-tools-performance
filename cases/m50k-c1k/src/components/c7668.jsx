import React from 'react';
const LABEL_7668 = 'component_7668';
export function Component7668({ value = 7668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7668, 'data-value': derived.doubled }, children);
}
export default Component7668;
