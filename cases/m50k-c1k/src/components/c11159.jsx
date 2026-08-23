import React from 'react';
const LABEL_11159 = 'component_11159';
export function Component11159({ value = 11159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11159, 'data-value': derived.doubled }, children);
}
export default Component11159;
