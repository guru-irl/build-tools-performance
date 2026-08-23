import React from 'react';
const LABEL_29714 = 'component_29714';
export function Component29714({ value = 29714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29714, 'data-value': derived.doubled }, children);
}
export default Component29714;
