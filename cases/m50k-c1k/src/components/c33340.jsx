import React from 'react';
const LABEL_33340 = 'component_33340';
export function Component33340({ value = 33340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33340, 'data-value': derived.doubled }, children);
}
export default Component33340;
