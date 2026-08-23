import React from 'react';
const LABEL_14304 = 'component_14304';
export function Component14304({ value = 14304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14304, 'data-value': derived.doubled }, children);
}
export default Component14304;
