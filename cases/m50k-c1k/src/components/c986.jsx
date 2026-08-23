import React from 'react';
const LABEL_986 = 'component_986';
export function Component986({ value = 986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_986, 'data-value': derived.doubled }, children);
}
export default Component986;
