import React from 'react';
const LABEL_11724 = 'component_11724';
export function Component11724({ value = 11724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11724, 'data-value': derived.doubled }, children);
}
export default Component11724;
