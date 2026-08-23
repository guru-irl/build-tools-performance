import React from 'react';
const LABEL_33969 = 'component_33969';
export function Component33969({ value = 33969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33969, 'data-value': derived.doubled }, children);
}
export default Component33969;
