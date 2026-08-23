import React from 'react';
const LABEL_15986 = 'component_15986';
export function Component15986({ value = 15986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15986, 'data-value': derived.doubled }, children);
}
export default Component15986;
