import React from 'react';
const LABEL_42103 = 'component_42103';
export function Component42103({ value = 42103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42103, 'data-value': derived.doubled }, children);
}
export default Component42103;
