import React from 'react';
const LABEL_43714 = 'component_43714';
export function Component43714({ value = 43714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43714, 'data-value': derived.doubled }, children);
}
export default Component43714;
