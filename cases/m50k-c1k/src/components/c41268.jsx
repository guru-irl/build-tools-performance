import React from 'react';
const LABEL_41268 = 'component_41268';
export function Component41268({ value = 41268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41268, 'data-value': derived.doubled }, children);
}
export default Component41268;
