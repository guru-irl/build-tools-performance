import React from 'react';
const LABEL_7813 = 'component_7813';
export function Component7813({ value = 7813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7813, 'data-value': derived.doubled }, children);
}
export default Component7813;
