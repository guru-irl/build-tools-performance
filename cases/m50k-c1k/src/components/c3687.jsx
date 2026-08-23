import React from 'react';
const LABEL_3687 = 'component_3687';
export function Component3687({ value = 3687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3687, 'data-value': derived.doubled }, children);
}
export default Component3687;
