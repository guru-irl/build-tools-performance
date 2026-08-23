import React from 'react';
const LABEL_35342 = 'component_35342';
export function Component35342({ value = 35342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35342, 'data-value': derived.doubled }, children);
}
export default Component35342;
