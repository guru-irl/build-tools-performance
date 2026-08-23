import React from 'react';
const LABEL_17944 = 'component_17944';
export function Component17944({ value = 17944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17944, 'data-value': derived.doubled }, children);
}
export default Component17944;
