import React from 'react';
const LABEL_7762 = 'component_7762';
export function Component7762({ value = 7762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7762, 'data-value': derived.doubled }, children);
}
export default Component7762;
