import React from 'react';
const LABEL_15823 = 'component_15823';
export function Component15823({ value = 15823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15823, 'data-value': derived.doubled }, children);
}
export default Component15823;
