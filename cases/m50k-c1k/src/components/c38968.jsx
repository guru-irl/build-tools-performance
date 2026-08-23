import React from 'react';
const LABEL_38968 = 'component_38968';
export function Component38968({ value = 38968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38968, 'data-value': derived.doubled }, children);
}
export default Component38968;
