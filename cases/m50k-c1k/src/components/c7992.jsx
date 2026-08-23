import React from 'react';
const LABEL_7992 = 'component_7992';
export function Component7992({ value = 7992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7992, 'data-value': derived.doubled }, children);
}
export default Component7992;
