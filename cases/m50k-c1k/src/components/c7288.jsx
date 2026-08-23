import React from 'react';
const LABEL_7288 = 'component_7288';
export function Component7288({ value = 7288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7288, 'data-value': derived.doubled }, children);
}
export default Component7288;
