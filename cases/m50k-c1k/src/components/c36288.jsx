import React from 'react';
const LABEL_36288 = 'component_36288';
export function Component36288({ value = 36288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36288, 'data-value': derived.doubled }, children);
}
export default Component36288;
