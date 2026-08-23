import React from 'react';
const LABEL_39986 = 'component_39986';
export function Component39986({ value = 39986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39986, 'data-value': derived.doubled }, children);
}
export default Component39986;
