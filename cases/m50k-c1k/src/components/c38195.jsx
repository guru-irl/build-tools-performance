import React from 'react';
const LABEL_38195 = 'component_38195';
export function Component38195({ value = 38195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38195, 'data-value': derived.doubled }, children);
}
export default Component38195;
