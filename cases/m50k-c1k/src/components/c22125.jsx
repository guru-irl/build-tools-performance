import React from 'react';
const LABEL_22125 = 'component_22125';
export function Component22125({ value = 22125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22125, 'data-value': derived.doubled }, children);
}
export default Component22125;
