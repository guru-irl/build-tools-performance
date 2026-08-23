import React from 'react';
const LABEL_15014 = 'component_15014';
export function Component15014({ value = 15014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15014, 'data-value': derived.doubled }, children);
}
export default Component15014;
