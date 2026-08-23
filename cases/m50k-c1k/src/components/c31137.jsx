import React from 'react';
const LABEL_31137 = 'component_31137';
export function Component31137({ value = 31137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31137, 'data-value': derived.doubled }, children);
}
export default Component31137;
