import React from 'react';
const LABEL_15815 = 'component_15815';
export function Component15815({ value = 15815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15815, 'data-value': derived.doubled }, children);
}
export default Component15815;
