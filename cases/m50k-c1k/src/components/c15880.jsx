import React from 'react';
const LABEL_15880 = 'component_15880';
export function Component15880({ value = 15880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15880, 'data-value': derived.doubled }, children);
}
export default Component15880;
