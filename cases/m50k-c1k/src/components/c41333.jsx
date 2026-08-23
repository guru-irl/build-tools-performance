import React from 'react';
const LABEL_41333 = 'component_41333';
export function Component41333({ value = 41333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41333, 'data-value': derived.doubled }, children);
}
export default Component41333;
