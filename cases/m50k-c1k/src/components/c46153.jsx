import React from 'react';
const LABEL_46153 = 'component_46153';
export function Component46153({ value = 46153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46153, 'data-value': derived.doubled }, children);
}
export default Component46153;
