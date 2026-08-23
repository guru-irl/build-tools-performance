import React from 'react';
const LABEL_37607 = 'component_37607';
export function Component37607({ value = 37607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37607, 'data-value': derived.doubled }, children);
}
export default Component37607;
