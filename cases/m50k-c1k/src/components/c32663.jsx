import React from 'react';
const LABEL_32663 = 'component_32663';
export function Component32663({ value = 32663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32663, 'data-value': derived.doubled }, children);
}
export default Component32663;
