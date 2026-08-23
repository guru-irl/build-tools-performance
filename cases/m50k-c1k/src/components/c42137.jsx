import React from 'react';
const LABEL_42137 = 'component_42137';
export function Component42137({ value = 42137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42137, 'data-value': derived.doubled }, children);
}
export default Component42137;
