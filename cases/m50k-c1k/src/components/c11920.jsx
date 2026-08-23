import React from 'react';
const LABEL_11920 = 'component_11920';
export function Component11920({ value = 11920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11920, 'data-value': derived.doubled }, children);
}
export default Component11920;
