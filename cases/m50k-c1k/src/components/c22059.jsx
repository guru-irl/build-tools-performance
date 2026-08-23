import React from 'react';
const LABEL_22059 = 'component_22059';
export function Component22059({ value = 22059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22059, 'data-value': derived.doubled }, children);
}
export default Component22059;
