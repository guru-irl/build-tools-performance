import React from 'react';
const LABEL_16815 = 'component_16815';
export function Component16815({ value = 16815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16815, 'data-value': derived.doubled }, children);
}
export default Component16815;
