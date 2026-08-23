import React from 'react';
const LABEL_3455 = 'component_3455';
export function Component3455({ value = 3455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3455, 'data-value': derived.doubled }, children);
}
export default Component3455;
