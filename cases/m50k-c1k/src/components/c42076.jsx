import React from 'react';
const LABEL_42076 = 'component_42076';
export function Component42076({ value = 42076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42076, 'data-value': derived.doubled }, children);
}
export default Component42076;
