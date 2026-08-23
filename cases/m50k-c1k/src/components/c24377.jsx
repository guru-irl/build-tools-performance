import React from 'react';
const LABEL_24377 = 'component_24377';
export function Component24377({ value = 24377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24377, 'data-value': derived.doubled }, children);
}
export default Component24377;
