import React from 'react';
const LABEL_44566 = 'component_44566';
export function Component44566({ value = 44566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44566, 'data-value': derived.doubled }, children);
}
export default Component44566;
