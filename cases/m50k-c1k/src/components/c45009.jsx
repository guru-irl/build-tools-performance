import React from 'react';
const LABEL_45009 = 'component_45009';
export function Component45009({ value = 45009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45009, 'data-value': derived.doubled }, children);
}
export default Component45009;
