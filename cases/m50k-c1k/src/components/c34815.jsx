import React from 'react';
const LABEL_34815 = 'component_34815';
export function Component34815({ value = 34815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34815, 'data-value': derived.doubled }, children);
}
export default Component34815;
