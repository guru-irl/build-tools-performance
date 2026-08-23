import React from 'react';
const LABEL_28882 = 'component_28882';
export function Component28882({ value = 28882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28882, 'data-value': derived.doubled }, children);
}
export default Component28882;
