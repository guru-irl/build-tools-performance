import React from 'react';
const LABEL_7631 = 'component_7631';
export function Component7631({ value = 7631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7631, 'data-value': derived.doubled }, children);
}
export default Component7631;
