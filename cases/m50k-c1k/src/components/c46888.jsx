import React from 'react';
const LABEL_46888 = 'component_46888';
export function Component46888({ value = 46888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46888, 'data-value': derived.doubled }, children);
}
export default Component46888;
