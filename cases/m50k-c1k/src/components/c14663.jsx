import React from 'react';
const LABEL_14663 = 'component_14663';
export function Component14663({ value = 14663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14663, 'data-value': derived.doubled }, children);
}
export default Component14663;
