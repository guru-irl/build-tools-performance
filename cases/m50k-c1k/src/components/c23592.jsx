import React from 'react';
const LABEL_23592 = 'component_23592';
export function Component23592({ value = 23592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23592, 'data-value': derived.doubled }, children);
}
export default Component23592;
