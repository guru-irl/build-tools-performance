import React from 'react';
const LABEL_23944 = 'component_23944';
export function Component23944({ value = 23944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23944, 'data-value': derived.doubled }, children);
}
export default Component23944;
