import React from 'react';
const LABEL_11443 = 'component_11443';
export function Component11443({ value = 11443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11443, 'data-value': derived.doubled }, children);
}
export default Component11443;
