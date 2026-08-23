import React from 'react';
const LABEL_12534 = 'component_12534';
export function Component12534({ value = 12534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12534, 'data-value': derived.doubled }, children);
}
export default Component12534;
