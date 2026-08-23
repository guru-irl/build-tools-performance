import React from 'react';
const LABEL_31558 = 'component_31558';
export function Component31558({ value = 31558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31558, 'data-value': derived.doubled }, children);
}
export default Component31558;
