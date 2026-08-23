import React from 'react';
const LABEL_1605 = 'component_1605';
export function Component1605({ value = 1605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1605, 'data-value': derived.doubled }, children);
}
export default Component1605;
