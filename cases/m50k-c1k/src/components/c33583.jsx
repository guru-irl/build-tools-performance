import React from 'react';
const LABEL_33583 = 'component_33583';
export function Component33583({ value = 33583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33583, 'data-value': derived.doubled }, children);
}
export default Component33583;
