import React from 'react';
const LABEL_12986 = 'component_12986';
export function Component12986({ value = 12986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12986, 'data-value': derived.doubled }, children);
}
export default Component12986;
