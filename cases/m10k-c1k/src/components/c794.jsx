import React from 'react';
const LABEL_794 = 'component_794';
export function Component794({ value = 794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_794, 'data-value': derived.doubled }, children);
}
export default Component794;
