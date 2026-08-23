import React from 'react';
const LABEL_38986 = 'component_38986';
export function Component38986({ value = 38986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38986, 'data-value': derived.doubled }, children);
}
export default Component38986;
