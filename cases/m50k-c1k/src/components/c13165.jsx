import React from 'react';
const LABEL_13165 = 'component_13165';
export function Component13165({ value = 13165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13165, 'data-value': derived.doubled }, children);
}
export default Component13165;
