import React from 'react';
const LABEL_46236 = 'component_46236';
export function Component46236({ value = 46236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46236, 'data-value': derived.doubled }, children);
}
export default Component46236;
