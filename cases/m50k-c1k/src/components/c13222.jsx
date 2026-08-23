import React from 'react';
const LABEL_13222 = 'component_13222';
export function Component13222({ value = 13222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13222, 'data-value': derived.doubled }, children);
}
export default Component13222;
