import React from 'react';
const LABEL_42193 = 'component_42193';
export function Component42193({ value = 42193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42193, 'data-value': derived.doubled }, children);
}
export default Component42193;
