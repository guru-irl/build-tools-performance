import React from 'react';
const LABEL_11246 = 'component_11246';
export function Component11246({ value = 11246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11246, 'data-value': derived.doubled }, children);
}
export default Component11246;
