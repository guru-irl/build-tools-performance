import React from 'react';
const LABEL_45281 = 'component_45281';
export function Component45281({ value = 45281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45281, 'data-value': derived.doubled }, children);
}
export default Component45281;
