import React from 'react';
const LABEL_10288 = 'component_10288';
export function Component10288({ value = 10288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10288, 'data-value': derived.doubled }, children);
}
export default Component10288;
