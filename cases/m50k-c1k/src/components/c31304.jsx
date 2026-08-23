import React from 'react';
const LABEL_31304 = 'component_31304';
export function Component31304({ value = 31304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31304, 'data-value': derived.doubled }, children);
}
export default Component31304;
