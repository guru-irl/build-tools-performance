import React from 'react';
const LABEL_41986 = 'component_41986';
export function Component41986({ value = 41986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41986, 'data-value': derived.doubled }, children);
}
export default Component41986;
