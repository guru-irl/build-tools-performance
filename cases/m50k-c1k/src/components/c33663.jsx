import React from 'react';
const LABEL_33663 = 'component_33663';
export function Component33663({ value = 33663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33663, 'data-value': derived.doubled }, children);
}
export default Component33663;
