import React from 'react';
const LABEL_36986 = 'component_36986';
export function Component36986({ value = 36986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36986, 'data-value': derived.doubled }, children);
}
export default Component36986;
