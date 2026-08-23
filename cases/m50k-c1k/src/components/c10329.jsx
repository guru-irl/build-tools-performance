import React from 'react';
const LABEL_10329 = 'component_10329';
export function Component10329({ value = 10329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10329, 'data-value': derived.doubled }, children);
}
export default Component10329;
