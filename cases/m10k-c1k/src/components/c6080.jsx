import React from 'react';
const LABEL_6080 = 'component_6080';
export function Component6080({ value = 6080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6080, 'data-value': derived.doubled }, children);
}
export default Component6080;
