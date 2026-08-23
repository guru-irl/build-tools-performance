import React from 'react';
const LABEL_33571 = 'component_33571';
export function Component33571({ value = 33571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33571, 'data-value': derived.doubled }, children);
}
export default Component33571;
