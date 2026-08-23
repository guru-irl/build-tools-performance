import React from 'react';
const LABEL_31202 = 'component_31202';
export function Component31202({ value = 31202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31202, 'data-value': derived.doubled }, children);
}
export default Component31202;
