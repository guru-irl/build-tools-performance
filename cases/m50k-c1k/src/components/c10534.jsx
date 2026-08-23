import React from 'react';
const LABEL_10534 = 'component_10534';
export function Component10534({ value = 10534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10534, 'data-value': derived.doubled }, children);
}
export default Component10534;
