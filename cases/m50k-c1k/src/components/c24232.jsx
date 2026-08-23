import React from 'react';
const LABEL_24232 = 'component_24232';
export function Component24232({ value = 24232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24232, 'data-value': derived.doubled }, children);
}
export default Component24232;
