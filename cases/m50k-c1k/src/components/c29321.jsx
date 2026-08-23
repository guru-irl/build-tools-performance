import React from 'react';
const LABEL_29321 = 'component_29321';
export function Component29321({ value = 29321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29321, 'data-value': derived.doubled }, children);
}
export default Component29321;
