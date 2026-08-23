import React from 'react';
const LABEL_42222 = 'component_42222';
export function Component42222({ value = 42222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42222, 'data-value': derived.doubled }, children);
}
export default Component42222;
