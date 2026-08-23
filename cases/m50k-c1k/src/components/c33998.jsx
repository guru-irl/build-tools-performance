import React from 'react';
const LABEL_33998 = 'component_33998';
export function Component33998({ value = 33998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33998, 'data-value': derived.doubled }, children);
}
export default Component33998;
