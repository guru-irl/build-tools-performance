import React from 'react';
const LABEL_23020 = 'component_23020';
export function Component23020({ value = 23020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23020, 'data-value': derived.doubled }, children);
}
export default Component23020;
