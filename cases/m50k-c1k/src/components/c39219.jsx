import React from 'react';
const LABEL_39219 = 'component_39219';
export function Component39219({ value = 39219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39219, 'data-value': derived.doubled }, children);
}
export default Component39219;
