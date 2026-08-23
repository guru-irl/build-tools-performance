import React from 'react';
const LABEL_7304 = 'component_7304';
export function Component7304({ value = 7304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7304, 'data-value': derived.doubled }, children);
}
export default Component7304;
