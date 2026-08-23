import React from 'react';
const LABEL_1714 = 'component_1714';
export function Component1714({ value = 1714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1714, 'data-value': derived.doubled }, children);
}
export default Component1714;
