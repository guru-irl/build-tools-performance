import React from 'react';
const LABEL_2986 = 'component_2986';
export function Component2986({ value = 2986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2986, 'data-value': derived.doubled }, children);
}
export default Component2986;
