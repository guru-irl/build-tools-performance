import React from 'react';
const LABEL_42600 = 'component_42600';
export function Component42600({ value = 42600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42600, 'data-value': derived.doubled }, children);
}
export default Component42600;
