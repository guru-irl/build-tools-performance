import React from 'react';
const LABEL_46239 = 'component_46239';
export function Component46239({ value = 46239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46239, 'data-value': derived.doubled }, children);
}
export default Component46239;
