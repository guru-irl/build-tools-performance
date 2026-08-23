import React from 'react';
const LABEL_6181 = 'component_6181';
export function Component6181({ value = 6181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6181, 'data-value': derived.doubled }, children);
}
export default Component6181;
