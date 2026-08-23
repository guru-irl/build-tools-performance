import React from 'react';
const LABEL_7968 = 'component_7968';
export function Component7968({ value = 7968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7968, 'data-value': derived.doubled }, children);
}
export default Component7968;
