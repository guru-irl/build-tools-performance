import React from 'react';
const LABEL_10647 = 'component_10647';
export function Component10647({ value = 10647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10647, 'data-value': derived.doubled }, children);
}
export default Component10647;
