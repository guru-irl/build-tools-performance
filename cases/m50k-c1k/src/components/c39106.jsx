import React from 'react';
const LABEL_39106 = 'component_39106';
export function Component39106({ value = 39106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39106, 'data-value': derived.doubled }, children);
}
export default Component39106;
