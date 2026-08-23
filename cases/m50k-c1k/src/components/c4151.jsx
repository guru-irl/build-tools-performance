import React from 'react';
const LABEL_4151 = 'component_4151';
export function Component4151({ value = 4151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4151, 'data-value': derived.doubled }, children);
}
export default Component4151;
