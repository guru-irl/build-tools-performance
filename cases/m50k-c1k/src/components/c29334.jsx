import React from 'react';
const LABEL_29334 = 'component_29334';
export function Component29334({ value = 29334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29334, 'data-value': derived.doubled }, children);
}
export default Component29334;
