import React from 'react';
const LABEL_32811 = 'component_32811';
export function Component32811({ value = 32811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32811, 'data-value': derived.doubled }, children);
}
export default Component32811;
