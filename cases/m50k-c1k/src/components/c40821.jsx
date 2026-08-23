import React from 'react';
const LABEL_40821 = 'component_40821';
export function Component40821({ value = 40821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40821, 'data-value': derived.doubled }, children);
}
export default Component40821;
