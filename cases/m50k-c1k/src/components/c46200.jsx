import React from 'react';
const LABEL_46200 = 'component_46200';
export function Component46200({ value = 46200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46200, 'data-value': derived.doubled }, children);
}
export default Component46200;
