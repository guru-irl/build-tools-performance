import React from 'react';
const LABEL_11932 = 'component_11932';
export function Component11932({ value = 11932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11932, 'data-value': derived.doubled }, children);
}
export default Component11932;
