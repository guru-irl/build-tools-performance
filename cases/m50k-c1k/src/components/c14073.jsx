import React from 'react';
const LABEL_14073 = 'component_14073';
export function Component14073({ value = 14073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14073, 'data-value': derived.doubled }, children);
}
export default Component14073;
