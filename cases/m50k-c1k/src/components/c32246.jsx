import React from 'react';
const LABEL_32246 = 'component_32246';
export function Component32246({ value = 32246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32246, 'data-value': derived.doubled }, children);
}
export default Component32246;
