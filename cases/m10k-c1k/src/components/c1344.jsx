import React from 'react';
const LABEL_1344 = 'component_1344';
export function Component1344({ value = 1344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1344, 'data-value': derived.doubled }, children);
}
export default Component1344;
