import React from 'react';
const LABEL_33815 = 'component_33815';
export function Component33815({ value = 33815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33815, 'data-value': derived.doubled }, children);
}
export default Component33815;
