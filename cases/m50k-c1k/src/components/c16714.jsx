import React from 'react';
const LABEL_16714 = 'component_16714';
export function Component16714({ value = 16714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16714, 'data-value': derived.doubled }, children);
}
export default Component16714;
