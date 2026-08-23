import React from 'react';
const LABEL_6590 = 'component_6590';
export function Component6590({ value = 6590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6590, 'data-value': derived.doubled }, children);
}
export default Component6590;
