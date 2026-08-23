import React from 'react';
const LABEL_10554 = 'component_10554';
export function Component10554({ value = 10554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10554, 'data-value': derived.doubled }, children);
}
export default Component10554;
