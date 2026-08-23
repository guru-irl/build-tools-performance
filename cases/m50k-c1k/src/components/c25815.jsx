import React from 'react';
const LABEL_25815 = 'component_25815';
export function Component25815({ value = 25815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25815, 'data-value': derived.doubled }, children);
}
export default Component25815;
