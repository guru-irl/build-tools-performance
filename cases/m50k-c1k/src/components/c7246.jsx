import React from 'react';
const LABEL_7246 = 'component_7246';
export function Component7246({ value = 7246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7246, 'data-value': derived.doubled }, children);
}
export default Component7246;
