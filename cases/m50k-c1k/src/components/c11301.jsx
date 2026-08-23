import React from 'react';
const LABEL_11301 = 'component_11301';
export function Component11301({ value = 11301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11301, 'data-value': derived.doubled }, children);
}
export default Component11301;
