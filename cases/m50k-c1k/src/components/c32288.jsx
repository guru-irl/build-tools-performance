import React from 'react';
const LABEL_32288 = 'component_32288';
export function Component32288({ value = 32288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32288, 'data-value': derived.doubled }, children);
}
export default Component32288;
