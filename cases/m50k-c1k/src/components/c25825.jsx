import React from 'react';
const LABEL_25825 = 'component_25825';
export function Component25825({ value = 25825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25825, 'data-value': derived.doubled }, children);
}
export default Component25825;
