import React from 'react';
const LABEL_7986 = 'component_7986';
export function Component7986({ value = 7986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7986, 'data-value': derived.doubled }, children);
}
export default Component7986;
