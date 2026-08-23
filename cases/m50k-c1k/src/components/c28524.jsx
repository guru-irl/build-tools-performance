import React from 'react';
const LABEL_28524 = 'component_28524';
export function Component28524({ value = 28524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28524, 'data-value': derived.doubled }, children);
}
export default Component28524;
