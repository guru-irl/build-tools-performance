import React from 'react';
const LABEL_18932 = 'component_18932';
export function Component18932({ value = 18932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18932, 'data-value': derived.doubled }, children);
}
export default Component18932;
