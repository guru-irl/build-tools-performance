import React from 'react';
const LABEL_42229 = 'component_42229';
export function Component42229({ value = 42229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42229, 'data-value': derived.doubled }, children);
}
export default Component42229;
