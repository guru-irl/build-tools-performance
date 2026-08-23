import React from 'react';
const LABEL_8821 = 'component_8821';
export function Component8821({ value = 8821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8821, 'data-value': derived.doubled }, children);
}
export default Component8821;
