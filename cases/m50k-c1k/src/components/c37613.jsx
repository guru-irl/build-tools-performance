import React from 'react';
const LABEL_37613 = 'component_37613';
export function Component37613({ value = 37613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37613, 'data-value': derived.doubled }, children);
}
export default Component37613;
