import React from 'react';
const LABEL_7893 = 'component_7893';
export function Component7893({ value = 7893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7893, 'data-value': derived.doubled }, children);
}
export default Component7893;
