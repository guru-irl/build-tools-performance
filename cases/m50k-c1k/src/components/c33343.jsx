import React from 'react';
const LABEL_33343 = 'component_33343';
export function Component33343({ value = 33343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33343, 'data-value': derived.doubled }, children);
}
export default Component33343;
