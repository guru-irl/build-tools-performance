import React from 'react';
const LABEL_28607 = 'component_28607';
export function Component28607({ value = 28607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28607, 'data-value': derived.doubled }, children);
}
export default Component28607;
