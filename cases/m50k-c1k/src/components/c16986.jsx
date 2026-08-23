import React from 'react';
const LABEL_16986 = 'component_16986';
export function Component16986({ value = 16986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16986, 'data-value': derived.doubled }, children);
}
export default Component16986;
