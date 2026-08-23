import React from 'react';
const LABEL_20304 = 'component_20304';
export function Component20304({ value = 20304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20304, 'data-value': derived.doubled }, children);
}
export default Component20304;
