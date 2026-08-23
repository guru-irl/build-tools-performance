import React from 'react';
const LABEL_11502 = 'component_11502';
export function Component11502({ value = 11502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11502, 'data-value': derived.doubled }, children);
}
export default Component11502;
