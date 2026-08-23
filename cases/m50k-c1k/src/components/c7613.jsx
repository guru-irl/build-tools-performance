import React from 'react';
const LABEL_7613 = 'component_7613';
export function Component7613({ value = 7613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7613, 'data-value': derived.doubled }, children);
}
export default Component7613;
