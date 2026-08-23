import React from 'react';
const LABEL_20663 = 'component_20663';
export function Component20663({ value = 20663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20663, 'data-value': derived.doubled }, children);
}
export default Component20663;
