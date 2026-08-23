import React from 'react';
const LABEL_8277 = 'component_8277';
export function Component8277({ value = 8277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8277, 'data-value': derived.doubled }, children);
}
export default Component8277;
