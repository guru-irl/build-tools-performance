import React from 'react';
const LABEL_5986 = 'component_5986';
export function Component5986({ value = 5986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5986, 'data-value': derived.doubled }, children);
}
export default Component5986;
