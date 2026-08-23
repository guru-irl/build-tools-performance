import React from 'react';
const LABEL_24163 = 'component_24163';
export function Component24163({ value = 24163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24163, 'data-value': derived.doubled }, children);
}
export default Component24163;
