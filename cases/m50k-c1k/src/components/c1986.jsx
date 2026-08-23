import React from 'react';
const LABEL_1986 = 'component_1986';
export function Component1986({ value = 1986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1986, 'data-value': derived.doubled }, children);
}
export default Component1986;
