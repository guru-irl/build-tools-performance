import React from 'react';
const LABEL_42854 = 'component_42854';
export function Component42854({ value = 42854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42854, 'data-value': derived.doubled }, children);
}
export default Component42854;
