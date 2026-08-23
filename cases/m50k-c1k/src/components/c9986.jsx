import React from 'react';
const LABEL_9986 = 'component_9986';
export function Component9986({ value = 9986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9986, 'data-value': derived.doubled }, children);
}
export default Component9986;
