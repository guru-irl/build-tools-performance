import React from 'react';
const LABEL_8815 = 'component_8815';
export function Component8815({ value = 8815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8815, 'data-value': derived.doubled }, children);
}
export default Component8815;
