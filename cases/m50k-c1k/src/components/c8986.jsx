import React from 'react';
const LABEL_8986 = 'component_8986';
export function Component8986({ value = 8986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8986, 'data-value': derived.doubled }, children);
}
export default Component8986;
