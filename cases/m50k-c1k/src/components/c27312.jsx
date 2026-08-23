import React from 'react';
const LABEL_27312 = 'component_27312';
export function Component27312({ value = 27312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27312, 'data-value': derived.doubled }, children);
}
export default Component27312;
