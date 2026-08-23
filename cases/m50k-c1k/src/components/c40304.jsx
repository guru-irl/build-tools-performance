import React from 'react';
const LABEL_40304 = 'component_40304';
export function Component40304({ value = 40304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40304, 'data-value': derived.doubled }, children);
}
export default Component40304;
