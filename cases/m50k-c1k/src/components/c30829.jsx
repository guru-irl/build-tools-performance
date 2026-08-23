import React from 'react';
const LABEL_30829 = 'component_30829';
export function Component30829({ value = 30829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30829, 'data-value': derived.doubled }, children);
}
export default Component30829;
