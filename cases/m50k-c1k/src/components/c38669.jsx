import React from 'react';
const LABEL_38669 = 'component_38669';
export function Component38669({ value = 38669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38669, 'data-value': derived.doubled }, children);
}
export default Component38669;
