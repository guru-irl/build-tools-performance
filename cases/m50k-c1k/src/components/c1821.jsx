import React from 'react';
const LABEL_1821 = 'component_1821';
export function Component1821({ value = 1821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1821, 'data-value': derived.doubled }, children);
}
export default Component1821;
