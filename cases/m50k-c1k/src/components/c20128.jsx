import React from 'react';
const LABEL_20128 = 'component_20128';
export function Component20128({ value = 20128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20128, 'data-value': derived.doubled }, children);
}
export default Component20128;
