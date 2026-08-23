import React from 'react';
const LABEL_21024 = 'component_21024';
export function Component21024({ value = 21024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21024, 'data-value': derived.doubled }, children);
}
export default Component21024;
