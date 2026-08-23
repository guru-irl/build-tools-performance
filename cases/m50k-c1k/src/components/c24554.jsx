import React from 'react';
const LABEL_24554 = 'component_24554';
export function Component24554({ value = 24554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24554, 'data-value': derived.doubled }, children);
}
export default Component24554;
