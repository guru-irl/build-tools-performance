import React from 'react';
const LABEL_32139 = 'component_32139';
export function Component32139({ value = 32139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32139, 'data-value': derived.doubled }, children);
}
export default Component32139;
