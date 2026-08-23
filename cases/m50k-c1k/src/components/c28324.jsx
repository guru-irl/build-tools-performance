import React from 'react';
const LABEL_28324 = 'component_28324';
export function Component28324({ value = 28324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28324, 'data-value': derived.doubled }, children);
}
export default Component28324;
