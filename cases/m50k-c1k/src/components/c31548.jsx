import React from 'react';
const LABEL_31548 = 'component_31548';
export function Component31548({ value = 31548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31548, 'data-value': derived.doubled }, children);
}
export default Component31548;
