import React from 'react';
const LABEL_37858 = 'component_37858';
export function Component37858({ value = 37858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37858, 'data-value': derived.doubled }, children);
}
export default Component37858;
