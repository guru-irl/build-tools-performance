import React from 'react';
const LABEL_41497 = 'component_41497';
export function Component41497({ value = 41497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41497, 'data-value': derived.doubled }, children);
}
export default Component41497;
