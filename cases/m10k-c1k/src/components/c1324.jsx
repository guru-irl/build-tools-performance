import React from 'react';
const LABEL_1324 = 'component_1324';
export function Component1324({ value = 1324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1324, 'data-value': derived.doubled }, children);
}
export default Component1324;
