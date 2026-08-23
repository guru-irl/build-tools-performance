import React from 'react';
const LABEL_31437 = 'component_31437';
export function Component31437({ value = 31437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31437, 'data-value': derived.doubled }, children);
}
export default Component31437;
