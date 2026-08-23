import React from 'react';
const LABEL_10391 = 'component_10391';
export function Component10391({ value = 10391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10391, 'data-value': derived.doubled }, children);
}
export default Component10391;
