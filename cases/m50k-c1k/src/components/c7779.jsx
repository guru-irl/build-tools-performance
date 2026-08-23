import React from 'react';
const LABEL_7779 = 'component_7779';
export function Component7779({ value = 7779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7779, 'data-value': derived.doubled }, children);
}
export default Component7779;
