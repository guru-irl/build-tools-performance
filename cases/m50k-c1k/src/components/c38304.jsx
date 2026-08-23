import React from 'react';
const LABEL_38304 = 'component_38304';
export function Component38304({ value = 38304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38304, 'data-value': derived.doubled }, children);
}
export default Component38304;
