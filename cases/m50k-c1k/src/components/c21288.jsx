import React from 'react';
const LABEL_21288 = 'component_21288';
export function Component21288({ value = 21288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21288, 'data-value': derived.doubled }, children);
}
export default Component21288;
