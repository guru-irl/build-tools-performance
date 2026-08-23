import React from 'react';
const LABEL_35020 = 'component_35020';
export function Component35020({ value = 35020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35020, 'data-value': derived.doubled }, children);
}
export default Component35020;
