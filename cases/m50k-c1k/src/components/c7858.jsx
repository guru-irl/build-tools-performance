import React from 'react';
const LABEL_7858 = 'component_7858';
export function Component7858({ value = 7858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7858, 'data-value': derived.doubled }, children);
}
export default Component7858;
