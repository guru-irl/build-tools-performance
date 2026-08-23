import React from 'react';
const LABEL_41821 = 'component_41821';
export function Component41821({ value = 41821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41821, 'data-value': derived.doubled }, children);
}
export default Component41821;
