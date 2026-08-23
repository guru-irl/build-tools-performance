import React from 'react';
const LABEL_25986 = 'component_25986';
export function Component25986({ value = 25986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25986, 'data-value': derived.doubled }, children);
}
export default Component25986;
