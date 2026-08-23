import React from 'react';
const LABEL_11280 = 'component_11280';
export function Component11280({ value = 11280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11280, 'data-value': derived.doubled }, children);
}
export default Component11280;
