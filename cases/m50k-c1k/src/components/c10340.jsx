import React from 'react';
const LABEL_10340 = 'component_10340';
export function Component10340({ value = 10340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10340, 'data-value': derived.doubled }, children);
}
export default Component10340;
