import React from 'react';
const LABEL_636 = 'component_636';
export function Component636({ value = 636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_636, 'data-value': derived.doubled }, children);
}
export default Component636;
