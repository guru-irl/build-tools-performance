import React from 'react';
const LABEL_31146 = 'component_31146';
export function Component31146({ value = 31146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31146, 'data-value': derived.doubled }, children);
}
export default Component31146;
