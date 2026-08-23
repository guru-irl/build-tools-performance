import React from 'react';
const LABEL_33288 = 'component_33288';
export function Component33288({ value = 33288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33288, 'data-value': derived.doubled }, children);
}
export default Component33288;
