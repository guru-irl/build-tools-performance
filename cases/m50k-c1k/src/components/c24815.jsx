import React from 'react';
const LABEL_24815 = 'component_24815';
export function Component24815({ value = 24815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24815, 'data-value': derived.doubled }, children);
}
export default Component24815;
