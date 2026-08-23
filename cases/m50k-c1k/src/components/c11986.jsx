import React from 'react';
const LABEL_11986 = 'component_11986';
export function Component11986({ value = 11986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11986, 'data-value': derived.doubled }, children);
}
export default Component11986;
