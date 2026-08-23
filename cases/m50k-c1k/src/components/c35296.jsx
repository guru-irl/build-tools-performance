import React from 'react';
const LABEL_35296 = 'component_35296';
export function Component35296({ value = 35296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35296, 'data-value': derived.doubled }, children);
}
export default Component35296;
