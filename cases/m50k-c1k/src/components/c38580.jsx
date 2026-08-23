import React from 'react';
const LABEL_38580 = 'component_38580';
export function Component38580({ value = 38580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38580, 'data-value': derived.doubled }, children);
}
export default Component38580;
