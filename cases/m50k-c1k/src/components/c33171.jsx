import React from 'react';
const LABEL_33171 = 'component_33171';
export function Component33171({ value = 33171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33171, 'data-value': derived.doubled }, children);
}
export default Component33171;
