import React from 'react';
const LABEL_45385 = 'component_45385';
export function Component45385({ value = 45385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45385, 'data-value': derived.doubled }, children);
}
export default Component45385;
