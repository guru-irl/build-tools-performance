import React from 'react';
const LABEL_18821 = 'component_18821';
export function Component18821({ value = 18821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18821, 'data-value': derived.doubled }, children);
}
export default Component18821;
