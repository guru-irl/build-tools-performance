import React from 'react';
const LABEL_25821 = 'component_25821';
export function Component25821({ value = 25821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25821, 'data-value': derived.doubled }, children);
}
export default Component25821;
