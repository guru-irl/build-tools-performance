import React from 'react';
const LABEL_13940 = 'component_13940';
export function Component13940({ value = 13940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13940, 'data-value': derived.doubled }, children);
}
export default Component13940;
