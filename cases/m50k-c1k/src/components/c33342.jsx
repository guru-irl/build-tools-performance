import React from 'react';
const LABEL_33342 = 'component_33342';
export function Component33342({ value = 33342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33342, 'data-value': derived.doubled }, children);
}
export default Component33342;
