import React from 'react';
const LABEL_42162 = 'component_42162';
export function Component42162({ value = 42162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42162, 'data-value': derived.doubled }, children);
}
export default Component42162;
