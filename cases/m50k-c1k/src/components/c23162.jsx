import React from 'react';
const LABEL_23162 = 'component_23162';
export function Component23162({ value = 23162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23162, 'data-value': derived.doubled }, children);
}
export default Component23162;
