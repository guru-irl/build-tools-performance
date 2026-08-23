import React from 'react';
const LABEL_11219 = 'component_11219';
export function Component11219({ value = 11219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11219, 'data-value': derived.doubled }, children);
}
export default Component11219;
