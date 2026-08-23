import React from 'react';
const LABEL_46714 = 'component_46714';
export function Component46714({ value = 46714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46714, 'data-value': derived.doubled }, children);
}
export default Component46714;
