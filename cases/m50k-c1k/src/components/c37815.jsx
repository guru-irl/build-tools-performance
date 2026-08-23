import React from 'react';
const LABEL_37815 = 'component_37815';
export function Component37815({ value = 37815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37815, 'data-value': derived.doubled }, children);
}
export default Component37815;
