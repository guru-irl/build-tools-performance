import React from 'react';
const LABEL_35301 = 'component_35301';
export function Component35301({ value = 35301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35301, 'data-value': derived.doubled }, children);
}
export default Component35301;
