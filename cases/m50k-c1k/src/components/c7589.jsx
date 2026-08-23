import React from 'react';
const LABEL_7589 = 'component_7589';
export function Component7589({ value = 7589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7589, 'data-value': derived.doubled }, children);
}
export default Component7589;
