import React from 'react';
const LABEL_13304 = 'component_13304';
export function Component13304({ value = 13304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13304, 'data-value': derived.doubled }, children);
}
export default Component13304;
