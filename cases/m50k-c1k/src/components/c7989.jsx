import React from 'react';
const LABEL_7989 = 'component_7989';
export function Component7989({ value = 7989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7989, 'data-value': derived.doubled }, children);
}
export default Component7989;
