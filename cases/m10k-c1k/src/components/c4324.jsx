import React from 'react';
const LABEL_4324 = 'component_4324';
export function Component4324({ value = 4324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4324, 'data-value': derived.doubled }, children);
}
export default Component4324;
