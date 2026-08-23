import React from 'react';
const LABEL_31478 = 'component_31478';
export function Component31478({ value = 31478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31478, 'data-value': derived.doubled }, children);
}
export default Component31478;
