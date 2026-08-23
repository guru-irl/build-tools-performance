import React from 'react';
const LABEL_22608 = 'component_22608';
export function Component22608({ value = 22608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22608, 'data-value': derived.doubled }, children);
}
export default Component22608;
