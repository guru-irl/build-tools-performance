import React from 'react';
const LABEL_46681 = 'component_46681';
export function Component46681({ value = 46681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46681, 'data-value': derived.doubled }, children);
}
export default Component46681;
