import React from 'react';
const LABEL_13219 = 'component_13219';
export function Component13219({ value = 13219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13219, 'data-value': derived.doubled }, children);
}
export default Component13219;
