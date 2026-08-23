import React from 'react';
const LABEL_5858 = 'component_5858';
export function Component5858({ value = 5858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5858, 'data-value': derived.doubled }, children);
}
export default Component5858;
