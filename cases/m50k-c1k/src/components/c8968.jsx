import React from 'react';
const LABEL_8968 = 'component_8968';
export function Component8968({ value = 8968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8968, 'data-value': derived.doubled }, children);
}
export default Component8968;
