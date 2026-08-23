import React from 'react';
const LABEL_23307 = 'component_23307';
export function Component23307({ value = 23307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23307, 'data-value': derived.doubled }, children);
}
export default Component23307;
