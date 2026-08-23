import React from 'react';
const LABEL_22266 = 'component_22266';
export function Component22266({ value = 22266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22266, 'data-value': derived.doubled }, children);
}
export default Component22266;
