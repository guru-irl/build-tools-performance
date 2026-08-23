import React from 'react';
const LABEL_3986 = 'component_3986';
export function Component3986({ value = 3986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3986, 'data-value': derived.doubled }, children);
}
export default Component3986;
