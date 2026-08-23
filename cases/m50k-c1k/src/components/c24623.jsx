import React from 'react';
const LABEL_24623 = 'component_24623';
export function Component24623({ value = 24623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24623, 'data-value': derived.doubled }, children);
}
export default Component24623;
