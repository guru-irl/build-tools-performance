import React from 'react';
const LABEL_6203 = 'component_6203';
export function Component6203({ value = 6203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6203, 'data-value': derived.doubled }, children);
}
export default Component6203;
