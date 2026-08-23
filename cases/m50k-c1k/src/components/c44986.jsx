import React from 'react';
const LABEL_44986 = 'component_44986';
export function Component44986({ value = 44986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44986, 'data-value': derived.doubled }, children);
}
export default Component44986;
