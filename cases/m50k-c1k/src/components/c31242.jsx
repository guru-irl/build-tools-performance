import React from 'react';
const LABEL_31242 = 'component_31242';
export function Component31242({ value = 31242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31242, 'data-value': derived.doubled }, children);
}
export default Component31242;
