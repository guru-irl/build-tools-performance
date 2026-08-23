import React from 'react';
const LABEL_24329 = 'component_24329';
export function Component24329({ value = 24329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24329, 'data-value': derived.doubled }, children);
}
export default Component24329;
