import React from 'react';
const LABEL_31613 = 'component_31613';
export function Component31613({ value = 31613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31613, 'data-value': derived.doubled }, children);
}
export default Component31613;
