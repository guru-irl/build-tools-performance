import React from 'react';
const LABEL_1298 = 'component_1298';
export function Component1298({ value = 1298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1298, 'data-value': derived.doubled }, children);
}
export default Component1298;
