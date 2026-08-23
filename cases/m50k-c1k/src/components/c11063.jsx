import React from 'react';
const LABEL_11063 = 'component_11063';
export function Component11063({ value = 11063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11063, 'data-value': derived.doubled }, children);
}
export default Component11063;
