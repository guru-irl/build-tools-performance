import React from 'react';
const LABEL_20576 = 'component_20576';
export function Component20576({ value = 20576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20576, 'data-value': derived.doubled }, children);
}
export default Component20576;
