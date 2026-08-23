import React from 'react';
const LABEL_34313 = 'component_34313';
export function Component34313({ value = 34313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34313, 'data-value': derived.doubled }, children);
}
export default Component34313;
