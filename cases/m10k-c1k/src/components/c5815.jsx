import React from 'react';
const LABEL_5815 = 'component_5815';
export function Component5815({ value = 5815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5815, 'data-value': derived.doubled }, children);
}
export default Component5815;
