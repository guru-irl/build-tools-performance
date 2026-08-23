import React from 'react';
const LABEL_19815 = 'component_19815';
export function Component19815({ value = 19815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19815, 'data-value': derived.doubled }, children);
}
export default Component19815;
