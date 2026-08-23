import React from 'react';
const LABEL_29055 = 'component_29055';
export function Component29055({ value = 29055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29055, 'data-value': derived.doubled }, children);
}
export default Component29055;
