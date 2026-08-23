import React from 'react';
const LABEL_42771 = 'component_42771';
export function Component42771({ value = 42771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42771, 'data-value': derived.doubled }, children);
}
export default Component42771;
