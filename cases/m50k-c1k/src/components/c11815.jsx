import React from 'react';
const LABEL_11815 = 'component_11815';
export function Component11815({ value = 11815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11815, 'data-value': derived.doubled }, children);
}
export default Component11815;
