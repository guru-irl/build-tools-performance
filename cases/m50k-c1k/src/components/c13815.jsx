import React from 'react';
const LABEL_13815 = 'component_13815';
export function Component13815({ value = 13815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13815, 'data-value': derived.doubled }, children);
}
export default Component13815;
