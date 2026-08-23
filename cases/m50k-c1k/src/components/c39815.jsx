import React from 'react';
const LABEL_39815 = 'component_39815';
export function Component39815({ value = 39815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39815, 'data-value': derived.doubled }, children);
}
export default Component39815;
