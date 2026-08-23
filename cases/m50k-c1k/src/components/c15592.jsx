import React from 'react';
const LABEL_15592 = 'component_15592';
export function Component15592({ value = 15592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15592, 'data-value': derived.doubled }, children);
}
export default Component15592;
