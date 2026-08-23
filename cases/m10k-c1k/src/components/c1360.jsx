import React from 'react';
const LABEL_1360 = 'component_1360';
export function Component1360({ value = 1360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1360, 'data-value': derived.doubled }, children);
}
export default Component1360;
