import React from 'react';
const LABEL_35944 = 'component_35944';
export function Component35944({ value = 35944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35944, 'data-value': derived.doubled }, children);
}
export default Component35944;
