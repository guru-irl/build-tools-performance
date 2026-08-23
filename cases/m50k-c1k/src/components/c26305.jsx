import React from 'react';
const LABEL_26305 = 'component_26305';
export function Component26305({ value = 26305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26305, 'data-value': derived.doubled }, children);
}
export default Component26305;
