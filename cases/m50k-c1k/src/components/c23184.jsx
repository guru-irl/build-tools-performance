import React from 'react';
const LABEL_23184 = 'component_23184';
export function Component23184({ value = 23184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23184, 'data-value': derived.doubled }, children);
}
export default Component23184;
