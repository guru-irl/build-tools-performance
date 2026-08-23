import React from 'react';
const LABEL_6882 = 'component_6882';
export function Component6882({ value = 6882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6882, 'data-value': derived.doubled }, children);
}
export default Component6882;
