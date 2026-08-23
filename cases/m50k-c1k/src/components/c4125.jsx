import React from 'react';
const LABEL_4125 = 'component_4125';
export function Component4125({ value = 4125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4125, 'data-value': derived.doubled }, children);
}
export default Component4125;
