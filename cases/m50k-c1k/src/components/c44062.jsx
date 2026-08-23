import React from 'react';
const LABEL_44062 = 'component_44062';
export function Component44062({ value = 44062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44062, 'data-value': derived.doubled }, children);
}
export default Component44062;
