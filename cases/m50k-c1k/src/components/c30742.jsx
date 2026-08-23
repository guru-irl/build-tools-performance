import React from 'react';
const LABEL_30742 = 'component_30742';
export function Component30742({ value = 30742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30742, 'data-value': derived.doubled }, children);
}
export default Component30742;
