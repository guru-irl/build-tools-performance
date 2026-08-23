import React from 'react';
const LABEL_7827 = 'component_7827';
export function Component7827({ value = 7827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7827, 'data-value': derived.doubled }, children);
}
export default Component7827;
