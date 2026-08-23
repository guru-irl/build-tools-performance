import React from 'react';
const LABEL_38663 = 'component_38663';
export function Component38663({ value = 38663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38663, 'data-value': derived.doubled }, children);
}
export default Component38663;
