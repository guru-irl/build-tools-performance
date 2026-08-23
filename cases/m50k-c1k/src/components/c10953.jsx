import React from 'react';
const LABEL_10953 = 'component_10953';
export function Component10953({ value = 10953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10953, 'data-value': derived.doubled }, children);
}
export default Component10953;
