import React from 'react';
const LABEL_15989 = 'component_15989';
export function Component15989({ value = 15989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15989, 'data-value': derived.doubled }, children);
}
export default Component15989;
