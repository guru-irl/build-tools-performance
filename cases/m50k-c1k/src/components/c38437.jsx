import React from 'react';
const LABEL_38437 = 'component_38437';
export function Component38437({ value = 38437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38437, 'data-value': derived.doubled }, children);
}
export default Component38437;
