import React from 'react';
const LABEL_36280 = 'component_36280';
export function Component36280({ value = 36280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36280, 'data-value': derived.doubled }, children);
}
export default Component36280;
