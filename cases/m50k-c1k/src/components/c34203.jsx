import React from 'react';
const LABEL_34203 = 'component_34203';
export function Component34203({ value = 34203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34203, 'data-value': derived.doubled }, children);
}
export default Component34203;
