import React from 'react';
const LABEL_12815 = 'component_12815';
export function Component12815({ value = 12815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12815, 'data-value': derived.doubled }, children);
}
export default Component12815;
