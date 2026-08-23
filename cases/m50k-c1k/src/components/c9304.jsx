import React from 'react';
const LABEL_9304 = 'component_9304';
export function Component9304({ value = 9304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9304, 'data-value': derived.doubled }, children);
}
export default Component9304;
