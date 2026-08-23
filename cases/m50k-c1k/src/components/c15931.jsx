import React from 'react';
const LABEL_15931 = 'component_15931';
export function Component15931({ value = 15931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15931, 'data-value': derived.doubled }, children);
}
export default Component15931;
