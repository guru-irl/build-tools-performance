import React from 'react';
const LABEL_10986 = 'component_10986';
export function Component10986({ value = 10986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10986, 'data-value': derived.doubled }, children);
}
export default Component10986;
