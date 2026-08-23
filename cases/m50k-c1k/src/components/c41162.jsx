import React from 'react';
const LABEL_41162 = 'component_41162';
export function Component41162({ value = 41162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41162, 'data-value': derived.doubled }, children);
}
export default Component41162;
