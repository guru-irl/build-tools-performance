import React from 'react';
const LABEL_15304 = 'component_15304';
export function Component15304({ value = 15304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15304, 'data-value': derived.doubled }, children);
}
export default Component15304;
