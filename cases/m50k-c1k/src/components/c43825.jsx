import React from 'react';
const LABEL_43825 = 'component_43825';
export function Component43825({ value = 43825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43825, 'data-value': derived.doubled }, children);
}
export default Component43825;
