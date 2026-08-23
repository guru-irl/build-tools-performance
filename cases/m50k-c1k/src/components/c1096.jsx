import React from 'react';
const LABEL_1096 = 'component_1096';
export function Component1096({ value = 1096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1096, 'data-value': derived.doubled }, children);
}
export default Component1096;
