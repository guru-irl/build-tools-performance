import React from 'react';
const LABEL_7654 = 'component_7654';
export function Component7654({ value = 7654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7654, 'data-value': derived.doubled }, children);
}
export default Component7654;
