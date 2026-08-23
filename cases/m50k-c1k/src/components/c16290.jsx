import React from 'react';
const LABEL_16290 = 'component_16290';
export function Component16290({ value = 16290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16290, 'data-value': derived.doubled }, children);
}
export default Component16290;
