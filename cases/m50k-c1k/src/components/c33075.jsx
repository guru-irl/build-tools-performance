import React from 'react';
const LABEL_33075 = 'component_33075';
export function Component33075({ value = 33075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33075, 'data-value': derived.doubled }, children);
}
export default Component33075;
