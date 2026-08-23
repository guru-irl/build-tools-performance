import React from 'react';
const LABEL_13474 = 'component_13474';
export function Component13474({ value = 13474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13474, 'data-value': derived.doubled }, children);
}
export default Component13474;
