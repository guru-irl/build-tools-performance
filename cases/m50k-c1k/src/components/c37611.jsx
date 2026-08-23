import React from 'react';
const LABEL_37611 = 'component_37611';
export function Component37611({ value = 37611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37611, 'data-value': derived.doubled }, children);
}
export default Component37611;
