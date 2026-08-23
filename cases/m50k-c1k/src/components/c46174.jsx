import React from 'react';
const LABEL_46174 = 'component_46174';
export function Component46174({ value = 46174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46174, 'data-value': derived.doubled }, children);
}
export default Component46174;
