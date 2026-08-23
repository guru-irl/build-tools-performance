import React from 'react';
const LABEL_42644 = 'component_42644';
export function Component42644({ value = 42644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42644, 'data-value': derived.doubled }, children);
}
export default Component42644;
