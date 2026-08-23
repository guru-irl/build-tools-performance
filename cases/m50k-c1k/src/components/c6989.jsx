import React from 'react';
const LABEL_6989 = 'component_6989';
export function Component6989({ value = 6989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6989, 'data-value': derived.doubled }, children);
}
export default Component6989;
