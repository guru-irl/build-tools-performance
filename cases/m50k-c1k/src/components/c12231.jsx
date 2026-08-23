import React from 'react';
const LABEL_12231 = 'component_12231';
export function Component12231({ value = 12231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12231, 'data-value': derived.doubled }, children);
}
export default Component12231;
