import React from 'react';
const LABEL_9288 = 'component_9288';
export function Component9288({ value = 9288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9288, 'data-value': derived.doubled }, children);
}
export default Component9288;
