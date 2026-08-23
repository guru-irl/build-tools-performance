import React from 'react';
const LABEL_46062 = 'component_46062';
export function Component46062({ value = 46062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46062, 'data-value': derived.doubled }, children);
}
export default Component46062;
