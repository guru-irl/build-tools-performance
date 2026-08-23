import React from 'react';
const LABEL_6986 = 'component_6986';
export function Component6986({ value = 6986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6986, 'data-value': derived.doubled }, children);
}
export default Component6986;
