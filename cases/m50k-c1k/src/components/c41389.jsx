import React from 'react';
const LABEL_41389 = 'component_41389';
export function Component41389({ value = 41389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41389, 'data-value': derived.doubled }, children);
}
export default Component41389;
