import React from 'react';
const LABEL_7132 = 'component_7132';
export function Component7132({ value = 7132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7132, 'data-value': derived.doubled }, children);
}
export default Component7132;
