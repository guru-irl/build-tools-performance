import React from 'react';
const LABEL_25277 = 'component_25277';
export function Component25277({ value = 25277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25277, 'data-value': derived.doubled }, children);
}
export default Component25277;
