import React from 'react';
const LABEL_29800 = 'component_29800';
export function Component29800({ value = 29800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29800, 'data-value': derived.doubled }, children);
}
export default Component29800;
