import React from 'react';
const LABEL_29725 = 'component_29725';
export function Component29725({ value = 29725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29725, 'data-value': derived.doubled }, children);
}
export default Component29725;
