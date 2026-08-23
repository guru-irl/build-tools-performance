import React from 'react';
const LABEL_25290 = 'component_25290';
export function Component25290({ value = 25290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25290, 'data-value': derived.doubled }, children);
}
export default Component25290;
