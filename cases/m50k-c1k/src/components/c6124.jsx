import React from 'react';
const LABEL_6124 = 'component_6124';
export function Component6124({ value = 6124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6124, 'data-value': derived.doubled }, children);
}
export default Component6124;
