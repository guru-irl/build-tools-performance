import React from 'react';
const LABEL_11559 = 'component_11559';
export function Component11559({ value = 11559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11559, 'data-value': derived.doubled }, children);
}
export default Component11559;
