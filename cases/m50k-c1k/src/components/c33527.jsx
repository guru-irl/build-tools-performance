import React from 'react';
const LABEL_33527 = 'component_33527';
export function Component33527({ value = 33527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33527, 'data-value': derived.doubled }, children);
}
export default Component33527;
