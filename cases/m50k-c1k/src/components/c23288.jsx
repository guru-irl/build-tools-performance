import React from 'react';
const LABEL_23288 = 'component_23288';
export function Component23288({ value = 23288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23288, 'data-value': derived.doubled }, children);
}
export default Component23288;
