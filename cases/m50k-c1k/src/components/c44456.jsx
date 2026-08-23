import React from 'react';
const LABEL_44456 = 'component_44456';
export function Component44456({ value = 44456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44456, 'data-value': derived.doubled }, children);
}
export default Component44456;
