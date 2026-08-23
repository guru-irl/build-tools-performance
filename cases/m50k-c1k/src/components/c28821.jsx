import React from 'react';
const LABEL_28821 = 'component_28821';
export function Component28821({ value = 28821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28821, 'data-value': derived.doubled }, children);
}
export default Component28821;
