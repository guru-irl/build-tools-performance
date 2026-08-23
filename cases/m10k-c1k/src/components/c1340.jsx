import React from 'react';
const LABEL_1340 = 'component_1340';
export function Component1340({ value = 1340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1340, 'data-value': derived.doubled }, children);
}
export default Component1340;
