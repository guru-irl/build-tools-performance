import React from 'react';
const LABEL_46304 = 'component_46304';
export function Component46304({ value = 46304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46304, 'data-value': derived.doubled }, children);
}
export default Component46304;
