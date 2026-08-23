import React from 'react';
const LABEL_29304 = 'component_29304';
export function Component29304({ value = 29304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29304, 'data-value': derived.doubled }, children);
}
export default Component29304;
