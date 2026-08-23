import React from 'react';
const LABEL_18345 = 'component_18345';
export function Component18345({ value = 18345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18345, 'data-value': derived.doubled }, children);
}
export default Component18345;
