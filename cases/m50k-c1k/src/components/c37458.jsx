import React from 'react';
const LABEL_37458 = 'component_37458';
export function Component37458({ value = 37458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37458, 'data-value': derived.doubled }, children);
}
export default Component37458;
