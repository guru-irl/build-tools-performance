import React from 'react';
const LABEL_24953 = 'component_24953';
export function Component24953({ value = 24953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24953, 'data-value': derived.doubled }, children);
}
export default Component24953;
