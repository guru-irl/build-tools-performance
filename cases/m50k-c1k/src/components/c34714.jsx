import React from 'react';
const LABEL_34714 = 'component_34714';
export function Component34714({ value = 34714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34714, 'data-value': derived.doubled }, children);
}
export default Component34714;
