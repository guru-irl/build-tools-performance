import React from 'react';
const LABEL_42296 = 'component_42296';
export function Component42296({ value = 42296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42296, 'data-value': derived.doubled }, children);
}
export default Component42296;
