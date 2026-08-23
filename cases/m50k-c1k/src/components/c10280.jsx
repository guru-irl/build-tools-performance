import React from 'react';
const LABEL_10280 = 'component_10280';
export function Component10280({ value = 10280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10280, 'data-value': derived.doubled }, children);
}
export default Component10280;
