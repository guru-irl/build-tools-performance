import React from 'react';
const LABEL_14986 = 'component_14986';
export function Component14986({ value = 14986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14986, 'data-value': derived.doubled }, children);
}
export default Component14986;
