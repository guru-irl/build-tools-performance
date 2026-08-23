import React from 'react';
const LABEL_36062 = 'component_36062';
export function Component36062({ value = 36062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36062, 'data-value': derived.doubled }, children);
}
export default Component36062;
