import React from 'react';
const LABEL_33304 = 'component_33304';
export function Component33304({ value = 33304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33304, 'data-value': derived.doubled }, children);
}
export default Component33304;
