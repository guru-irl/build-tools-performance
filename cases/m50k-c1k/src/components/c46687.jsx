import React from 'react';
const LABEL_46687 = 'component_46687';
export function Component46687({ value = 46687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46687, 'data-value': derived.doubled }, children);
}
export default Component46687;
