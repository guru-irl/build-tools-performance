import React from 'react';
const LABEL_45081 = 'component_45081';
export function Component45081({ value = 45081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45081, 'data-value': derived.doubled }, children);
}
export default Component45081;
