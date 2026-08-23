import React from 'react';
const LABEL_45792 = 'component_45792';
export function Component45792({ value = 45792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45792, 'data-value': derived.doubled }, children);
}
export default Component45792;
