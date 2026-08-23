import React from 'react';
const LABEL_42815 = 'component_42815';
export function Component42815({ value = 42815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42815, 'data-value': derived.doubled }, children);
}
export default Component42815;
