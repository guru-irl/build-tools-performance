import React from 'react';
const LABEL_1347 = 'component_1347';
export function Component1347({ value = 1347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1347, 'data-value': derived.doubled }, children);
}
export default Component1347;
