import React from 'react';
const LABEL_3181 = 'component_3181';
export function Component3181({ value = 3181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3181, 'data-value': derived.doubled }, children);
}
export default Component3181;
