import React from 'react';
const LABEL_35771 = 'component_35771';
export function Component35771({ value = 35771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35771, 'data-value': derived.doubled }, children);
}
export default Component35771;
