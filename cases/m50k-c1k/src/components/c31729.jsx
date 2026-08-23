import React from 'react';
const LABEL_31729 = 'component_31729';
export function Component31729({ value = 31729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31729, 'data-value': derived.doubled }, children);
}
export default Component31729;
