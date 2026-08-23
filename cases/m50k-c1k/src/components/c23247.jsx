import React from 'react';
const LABEL_23247 = 'component_23247';
export function Component23247({ value = 23247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23247, 'data-value': derived.doubled }, children);
}
export default Component23247;
