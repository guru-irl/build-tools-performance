import React from 'react';
const LABEL_13151 = 'component_13151';
export function Component13151({ value = 13151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13151, 'data-value': derived.doubled }, children);
}
export default Component13151;
