import React from 'react';
const LABEL_13277 = 'component_13277';
export function Component13277({ value = 13277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13277, 'data-value': derived.doubled }, children);
}
export default Component13277;
