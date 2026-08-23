import React from 'react';
const LABEL_41369 = 'component_41369';
export function Component41369({ value = 41369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41369, 'data-value': derived.doubled }, children);
}
export default Component41369;
