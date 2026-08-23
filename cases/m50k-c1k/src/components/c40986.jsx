import React from 'react';
const LABEL_40986 = 'component_40986';
export function Component40986({ value = 40986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40986, 'data-value': derived.doubled }, children);
}
export default Component40986;
