import React from 'react';
const LABEL_46075 = 'component_46075';
export function Component46075({ value = 46075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46075, 'data-value': derived.doubled }, children);
}
export default Component46075;
