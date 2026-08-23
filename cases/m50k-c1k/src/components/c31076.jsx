import React from 'react';
const LABEL_31076 = 'component_31076';
export function Component31076({ value = 31076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31076, 'data-value': derived.doubled }, children);
}
export default Component31076;
