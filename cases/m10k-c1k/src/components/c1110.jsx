import React from 'react';
const LABEL_1110 = 'component_1110';
export function Component1110({ value = 1110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1110, 'data-value': derived.doubled }, children);
}
export default Component1110;
