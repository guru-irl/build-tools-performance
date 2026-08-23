import React from 'react';
const LABEL_13819 = 'component_13819';
export function Component13819({ value = 13819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13819, 'data-value': derived.doubled }, children);
}
export default Component13819;
