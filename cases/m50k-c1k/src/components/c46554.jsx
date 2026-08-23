import React from 'react';
const LABEL_46554 = 'component_46554';
export function Component46554({ value = 46554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46554, 'data-value': derived.doubled }, children);
}
export default Component46554;
