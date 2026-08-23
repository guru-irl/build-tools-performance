import React from 'react';
const LABEL_4821 = 'component_4821';
export function Component4821({ value = 4821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4821, 'data-value': derived.doubled }, children);
}
export default Component4821;
