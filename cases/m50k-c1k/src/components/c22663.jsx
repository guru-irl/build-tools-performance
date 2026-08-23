import React from 'react';
const LABEL_22663 = 'component_22663';
export function Component22663({ value = 22663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22663, 'data-value': derived.doubled }, children);
}
export default Component22663;
