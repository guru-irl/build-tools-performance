import React from 'react';
const LABEL_24268 = 'component_24268';
export function Component24268({ value = 24268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24268, 'data-value': derived.doubled }, children);
}
export default Component24268;
