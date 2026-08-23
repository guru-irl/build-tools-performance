import React from 'react';
const LABEL_46821 = 'component_46821';
export function Component46821({ value = 46821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46821, 'data-value': derived.doubled }, children);
}
export default Component46821;
