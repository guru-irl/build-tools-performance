import React from 'react';
const LABEL_6672 = 'component_6672';
export function Component6672({ value = 6672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6672, 'data-value': derived.doubled }, children);
}
export default Component6672;
