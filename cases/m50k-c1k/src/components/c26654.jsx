import React from 'react';
const LABEL_26654 = 'component_26654';
export function Component26654({ value = 26654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26654, 'data-value': derived.doubled }, children);
}
export default Component26654;
