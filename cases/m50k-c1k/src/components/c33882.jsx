import React from 'react';
const LABEL_33882 = 'component_33882';
export function Component33882({ value = 33882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33882, 'data-value': derived.doubled }, children);
}
export default Component33882;
