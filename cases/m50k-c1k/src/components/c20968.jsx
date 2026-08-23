import React from 'react';
const LABEL_20968 = 'component_20968';
export function Component20968({ value = 20968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20968, 'data-value': derived.doubled }, children);
}
export default Component20968;
