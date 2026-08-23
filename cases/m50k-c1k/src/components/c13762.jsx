import React from 'react';
const LABEL_13762 = 'component_13762';
export function Component13762({ value = 13762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13762, 'data-value': derived.doubled }, children);
}
export default Component13762;
