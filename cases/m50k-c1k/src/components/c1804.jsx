import React from 'react';
const LABEL_1804 = 'component_1804';
export function Component1804({ value = 1804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1804, 'data-value': derived.doubled }, children);
}
export default Component1804;
