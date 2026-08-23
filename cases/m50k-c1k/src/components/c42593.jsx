import React from 'react';
const LABEL_42593 = 'component_42593';
export function Component42593({ value = 42593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42593, 'data-value': derived.doubled }, children);
}
export default Component42593;
