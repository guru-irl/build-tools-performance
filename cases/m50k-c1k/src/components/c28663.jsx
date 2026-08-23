import React from 'react';
const LABEL_28663 = 'component_28663';
export function Component28663({ value = 28663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28663, 'data-value': derived.doubled }, children);
}
export default Component28663;
