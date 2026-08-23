import React from 'react';
const LABEL_14714 = 'component_14714';
export function Component14714({ value = 14714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14714, 'data-value': derived.doubled }, children);
}
export default Component14714;
