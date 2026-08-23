import React from 'react';
const LABEL_33986 = 'component_33986';
export function Component33986({ value = 33986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33986, 'data-value': derived.doubled }, children);
}
export default Component33986;
