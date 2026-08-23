import React from 'react';
const LABEL_13733 = 'component_13733';
export function Component13733({ value = 13733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13733, 'data-value': derived.doubled }, children);
}
export default Component13733;
