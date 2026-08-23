import React from 'react';
const LABEL_9212 = 'component_9212';
export function Component9212({ value = 9212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9212, 'data-value': derived.doubled }, children);
}
export default Component9212;
