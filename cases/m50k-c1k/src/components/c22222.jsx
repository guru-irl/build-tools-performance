import React from 'react';
const LABEL_22222 = 'component_22222';
export function Component22222({ value = 22222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22222, 'data-value': derived.doubled }, children);
}
export default Component22222;
