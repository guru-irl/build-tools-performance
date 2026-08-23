import React from 'react';
const LABEL_33944 = 'component_33944';
export function Component33944({ value = 33944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33944, 'data-value': derived.doubled }, children);
}
export default Component33944;
