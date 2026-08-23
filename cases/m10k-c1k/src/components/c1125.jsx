import React from 'react';
const LABEL_1125 = 'component_1125';
export function Component1125({ value = 1125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1125, 'data-value': derived.doubled }, children);
}
export default Component1125;
