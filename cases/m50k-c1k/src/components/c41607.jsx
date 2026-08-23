import React from 'react';
const LABEL_41607 = 'component_41607';
export function Component41607({ value = 41607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41607, 'data-value': derived.doubled }, children);
}
export default Component41607;
