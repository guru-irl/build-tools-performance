import React from 'react';
const LABEL_7280 = 'component_7280';
export function Component7280({ value = 7280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7280, 'data-value': derived.doubled }, children);
}
export default Component7280;
