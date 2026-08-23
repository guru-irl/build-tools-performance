import React from 'react';
const LABEL_27468 = 'component_27468';
export function Component27468({ value = 27468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27468, 'data-value': derived.doubled }, children);
}
export default Component27468;
