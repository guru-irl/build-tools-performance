import React from 'react';
const LABEL_11647 = 'component_11647';
export function Component11647({ value = 11647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11647, 'data-value': derived.doubled }, children);
}
export default Component11647;
