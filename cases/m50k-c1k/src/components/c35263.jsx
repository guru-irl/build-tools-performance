import React from 'react';
const LABEL_35263 = 'component_35263';
export function Component35263({ value = 35263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35263, 'data-value': derived.doubled }, children);
}
export default Component35263;
