import React from 'react';
const LABEL_1176 = 'component_1176';
export function Component1176({ value = 1176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1176, 'data-value': derived.doubled }, children);
}
export default Component1176;
