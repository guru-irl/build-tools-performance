import React from 'react';
const LABEL_42821 = 'component_42821';
export function Component42821({ value = 42821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42821, 'data-value': derived.doubled }, children);
}
export default Component42821;
