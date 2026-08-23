import React from 'react';
const LABEL_33975 = 'component_33975';
export function Component33975({ value = 33975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33975, 'data-value': derived.doubled }, children);
}
export default Component33975;
