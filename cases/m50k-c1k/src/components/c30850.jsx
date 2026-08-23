import React from 'react';
const LABEL_30850 = 'component_30850';
export function Component30850({ value = 30850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30850, 'data-value': derived.doubled }, children);
}
export default Component30850;
