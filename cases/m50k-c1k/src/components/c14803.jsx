import React from 'react';
const LABEL_14803 = 'component_14803';
export function Component14803({ value = 14803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14803, 'data-value': derived.doubled }, children);
}
export default Component14803;
