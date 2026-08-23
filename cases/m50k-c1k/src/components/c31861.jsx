import React from 'react';
const LABEL_31861 = 'component_31861';
export function Component31861({ value = 31861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31861, 'data-value': derived.doubled }, children);
}
export default Component31861;
