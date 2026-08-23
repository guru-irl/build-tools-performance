import React from 'react';
const LABEL_46288 = 'component_46288';
export function Component46288({ value = 46288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46288, 'data-value': derived.doubled }, children);
}
export default Component46288;
