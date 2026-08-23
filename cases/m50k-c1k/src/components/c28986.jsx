import React from 'react';
const LABEL_28986 = 'component_28986';
export function Component28986({ value = 28986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28986, 'data-value': derived.doubled }, children);
}
export default Component28986;
