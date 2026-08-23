import React from 'react';
const LABEL_11324 = 'component_11324';
export function Component11324({ value = 11324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11324, 'data-value': derived.doubled }, children);
}
export default Component11324;
