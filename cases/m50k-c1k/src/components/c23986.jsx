import React from 'react';
const LABEL_23986 = 'component_23986';
export function Component23986({ value = 23986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23986, 'data-value': derived.doubled }, children);
}
export default Component23986;
