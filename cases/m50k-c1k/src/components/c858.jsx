import React from 'react';
const LABEL_858 = 'component_858';
export function Component858({ value = 858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_858, 'data-value': derived.doubled }, children);
}
export default Component858;
