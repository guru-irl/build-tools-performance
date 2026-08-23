import React from 'react';
const LABEL_33465 = 'component_33465';
export function Component33465({ value = 33465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33465, 'data-value': derived.doubled }, children);
}
export default Component33465;
