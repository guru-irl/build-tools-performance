import React from 'react';
const LABEL_8324 = 'component_8324';
export function Component8324({ value = 8324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8324, 'data-value': derived.doubled }, children);
}
export default Component8324;
