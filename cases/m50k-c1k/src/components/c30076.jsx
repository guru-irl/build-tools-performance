import React from 'react';
const LABEL_30076 = 'component_30076';
export function Component30076({ value = 30076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30076, 'data-value': derived.doubled }, children);
}
export default Component30076;
