import React from 'react';
const LABEL_14182 = 'component_14182';
export function Component14182({ value = 14182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14182, 'data-value': derived.doubled }, children);
}
export default Component14182;
