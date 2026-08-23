import React from 'react';
const LABEL_38472 = 'component_38472';
export function Component38472({ value = 38472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38472, 'data-value': derived.doubled }, children);
}
export default Component38472;
