import React from 'react';
const LABEL_26139 = 'component_26139';
export function Component26139({ value = 26139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26139, 'data-value': derived.doubled }, children);
}
export default Component26139;
