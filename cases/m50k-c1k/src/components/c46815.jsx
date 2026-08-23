import React from 'react';
const LABEL_46815 = 'component_46815';
export function Component46815({ value = 46815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46815, 'data-value': derived.doubled }, children);
}
export default Component46815;
