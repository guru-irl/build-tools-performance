import React from 'react';
const LABEL_18714 = 'component_18714';
export function Component18714({ value = 18714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18714, 'data-value': derived.doubled }, children);
}
export default Component18714;
