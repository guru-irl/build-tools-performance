import React from 'react';
const LABEL_162 = 'component_162';
export function Component162({ value = 162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_162, 'data-value': derived.doubled }, children);
}
export default Component162;
