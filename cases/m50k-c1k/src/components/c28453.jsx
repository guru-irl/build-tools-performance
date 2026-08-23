import React from 'react';
const LABEL_28453 = 'component_28453';
export function Component28453({ value = 28453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28453, 'data-value': derived.doubled }, children);
}
export default Component28453;
