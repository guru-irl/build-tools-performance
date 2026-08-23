import React from 'react';
const LABEL_22854 = 'component_22854';
export function Component22854({ value = 22854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22854, 'data-value': derived.doubled }, children);
}
export default Component22854;
