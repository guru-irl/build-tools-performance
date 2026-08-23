import React from 'react';
const LABEL_31280 = 'component_31280';
export function Component31280({ value = 31280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31280, 'data-value': derived.doubled }, children);
}
export default Component31280;
