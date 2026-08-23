import React from 'react';
const LABEL_29663 = 'component_29663';
export function Component29663({ value = 29663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29663, 'data-value': derived.doubled }, children);
}
export default Component29663;
