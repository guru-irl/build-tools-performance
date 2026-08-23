import React from 'react';
const LABEL_34151 = 'component_34151';
export function Component34151({ value = 34151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34151, 'data-value': derived.doubled }, children);
}
export default Component34151;
