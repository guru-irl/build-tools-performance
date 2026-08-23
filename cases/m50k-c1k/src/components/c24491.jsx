import React from 'react';
const LABEL_24491 = 'component_24491';
export function Component24491({ value = 24491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24491, 'data-value': derived.doubled }, children);
}
export default Component24491;
