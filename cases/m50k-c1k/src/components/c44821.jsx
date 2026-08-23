import React from 'react';
const LABEL_44821 = 'component_44821';
export function Component44821({ value = 44821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44821, 'data-value': derived.doubled }, children);
}
export default Component44821;
