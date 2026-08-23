import React from 'react';
const LABEL_821 = 'component_821';
export function Component821({ value = 821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_821, 'data-value': derived.doubled }, children);
}
export default Component821;
