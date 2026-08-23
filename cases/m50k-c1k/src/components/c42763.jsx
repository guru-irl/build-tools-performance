import React from 'react';
const LABEL_42763 = 'component_42763';
export function Component42763({ value = 42763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42763, 'data-value': derived.doubled }, children);
}
export default Component42763;
