import React from 'react';
const LABEL_15502 = 'component_15502';
export function Component15502({ value = 15502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15502, 'data-value': derived.doubled }, children);
}
export default Component15502;
