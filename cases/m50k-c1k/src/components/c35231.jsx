import React from 'react';
const LABEL_35231 = 'component_35231';
export function Component35231({ value = 35231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35231, 'data-value': derived.doubled }, children);
}
export default Component35231;
