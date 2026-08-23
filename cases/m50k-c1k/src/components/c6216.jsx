import React from 'react';
const LABEL_6216 = 'component_6216';
export function Component6216({ value = 6216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6216, 'data-value': derived.doubled }, children);
}
export default Component6216;
