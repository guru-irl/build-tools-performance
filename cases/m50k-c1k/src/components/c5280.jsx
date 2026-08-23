import React from 'react';
const LABEL_5280 = 'component_5280';
export function Component5280({ value = 5280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5280, 'data-value': derived.doubled }, children);
}
export default Component5280;
