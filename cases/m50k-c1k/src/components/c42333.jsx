import React from 'react';
const LABEL_42333 = 'component_42333';
export function Component42333({ value = 42333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42333, 'data-value': derived.doubled }, children);
}
export default Component42333;
