import React from 'react';
const LABEL_32944 = 'component_32944';
export function Component32944({ value = 32944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32944, 'data-value': derived.doubled }, children);
}
export default Component32944;
