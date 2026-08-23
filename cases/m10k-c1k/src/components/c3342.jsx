import React from 'react';
const LABEL_3342 = 'component_3342';
export function Component3342({ value = 3342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3342, 'data-value': derived.doubled }, children);
}
export default Component3342;
