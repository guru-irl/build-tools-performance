import React from 'react';
const LABEL_37062 = 'component_37062';
export function Component37062({ value = 37062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37062, 'data-value': derived.doubled }, children);
}
export default Component37062;
