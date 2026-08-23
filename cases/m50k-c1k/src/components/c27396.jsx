import React from 'react';
const LABEL_27396 = 'component_27396';
export function Component27396({ value = 27396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27396, 'data-value': derived.doubled }, children);
}
export default Component27396;
