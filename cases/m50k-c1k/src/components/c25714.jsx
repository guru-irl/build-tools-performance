import React from 'react';
const LABEL_25714 = 'component_25714';
export function Component25714({ value = 25714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25714, 'data-value': derived.doubled }, children);
}
export default Component25714;
