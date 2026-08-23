import React from 'react';
const LABEL_36246 = 'component_36246';
export function Component36246({ value = 36246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36246, 'data-value': derived.doubled }, children);
}
export default Component36246;
