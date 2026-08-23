import React from 'react';
const LABEL_46132 = 'component_46132';
export function Component46132({ value = 46132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46132, 'data-value': derived.doubled }, children);
}
export default Component46132;
