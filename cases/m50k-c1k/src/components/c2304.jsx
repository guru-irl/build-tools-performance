import React from 'react';
const LABEL_2304 = 'component_2304';
export function Component2304({ value = 2304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2304, 'data-value': derived.doubled }, children);
}
export default Component2304;
