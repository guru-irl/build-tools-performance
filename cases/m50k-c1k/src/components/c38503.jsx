import React from 'react';
const LABEL_38503 = 'component_38503';
export function Component38503({ value = 38503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38503, 'data-value': derived.doubled }, children);
}
export default Component38503;
