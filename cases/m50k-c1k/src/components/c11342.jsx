import React from 'react';
const LABEL_11342 = 'component_11342';
export function Component11342({ value = 11342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11342, 'data-value': derived.doubled }, children);
}
export default Component11342;
