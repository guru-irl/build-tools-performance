import React from 'react';
const LABEL_7329 = 'component_7329';
export function Component7329({ value = 7329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7329, 'data-value': derived.doubled }, children);
}
export default Component7329;
