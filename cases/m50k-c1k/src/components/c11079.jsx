import React from 'react';
const LABEL_11079 = 'component_11079';
export function Component11079({ value = 11079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11079, 'data-value': derived.doubled }, children);
}
export default Component11079;
