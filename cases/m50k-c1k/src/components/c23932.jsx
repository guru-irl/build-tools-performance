import React from 'react';
const LABEL_23932 = 'component_23932';
export function Component23932({ value = 23932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23932, 'data-value': derived.doubled }, children);
}
export default Component23932;
