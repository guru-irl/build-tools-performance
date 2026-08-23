import React from 'react';
const LABEL_3304 = 'component_3304';
export function Component3304({ value = 3304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3304, 'data-value': derived.doubled }, children);
}
export default Component3304;
