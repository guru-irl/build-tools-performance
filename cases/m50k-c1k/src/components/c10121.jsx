import React from 'react';
const LABEL_10121 = 'component_10121';
export function Component10121({ value = 10121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10121, 'data-value': derived.doubled }, children);
}
export default Component10121;
