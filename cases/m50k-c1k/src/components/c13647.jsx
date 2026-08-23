import React from 'react';
const LABEL_13647 = 'component_13647';
export function Component13647({ value = 13647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13647, 'data-value': derived.doubled }, children);
}
export default Component13647;
