import React from 'react';
const LABEL_33966 = 'component_33966';
export function Component33966({ value = 33966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33966, 'data-value': derived.doubled }, children);
}
export default Component33966;
