import React from 'react';
const LABEL_1391 = 'component_1391';
export function Component1391({ value = 1391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1391, 'data-value': derived.doubled }, children);
}
export default Component1391;
