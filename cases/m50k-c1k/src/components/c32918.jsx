import React from 'react';
const LABEL_32918 = 'component_32918';
export function Component32918({ value = 32918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32918, 'data-value': derived.doubled }, children);
}
export default Component32918;
