import React from 'react';
const LABEL_33301 = 'component_33301';
export function Component33301({ value = 33301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33301, 'data-value': derived.doubled }, children);
}
export default Component33301;
