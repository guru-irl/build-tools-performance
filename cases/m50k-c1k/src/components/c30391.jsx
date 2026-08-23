import React from 'react';
const LABEL_30391 = 'component_30391';
export function Component30391({ value = 30391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30391, 'data-value': derived.doubled }, children);
}
export default Component30391;
