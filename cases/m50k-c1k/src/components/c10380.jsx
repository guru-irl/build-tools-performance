import React from 'react';
const LABEL_10380 = 'component_10380';
export function Component10380({ value = 10380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10380, 'data-value': derived.doubled }, children);
}
export default Component10380;
