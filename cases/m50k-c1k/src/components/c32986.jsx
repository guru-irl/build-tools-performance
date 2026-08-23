import React from 'react';
const LABEL_32986 = 'component_32986';
export function Component32986({ value = 32986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32986, 'data-value': derived.doubled }, children);
}
export default Component32986;
