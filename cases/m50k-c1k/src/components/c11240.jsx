import React from 'react';
const LABEL_11240 = 'component_11240';
export function Component11240({ value = 11240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11240, 'data-value': derived.doubled }, children);
}
export default Component11240;
