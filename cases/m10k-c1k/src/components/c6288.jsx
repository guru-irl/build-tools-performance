import React from 'react';
const LABEL_6288 = 'component_6288';
export function Component6288({ value = 6288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6288, 'data-value': derived.doubled }, children);
}
export default Component6288;
