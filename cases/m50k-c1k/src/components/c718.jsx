import React from 'react';
const LABEL_718 = 'component_718';
export function Component718({ value = 718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_718, 'data-value': derived.doubled }, children);
}
export default Component718;
