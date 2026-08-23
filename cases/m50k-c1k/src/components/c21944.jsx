import React from 'react';
const LABEL_21944 = 'component_21944';
export function Component21944({ value = 21944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21944, 'data-value': derived.doubled }, children);
}
export default Component21944;
