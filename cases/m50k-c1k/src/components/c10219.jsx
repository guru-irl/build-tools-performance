import React from 'react';
const LABEL_10219 = 'component_10219';
export function Component10219({ value = 10219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10219, 'data-value': derived.doubled }, children);
}
export default Component10219;
