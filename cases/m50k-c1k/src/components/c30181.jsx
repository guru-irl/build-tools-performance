import React from 'react';
const LABEL_30181 = 'component_30181';
export function Component30181({ value = 30181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30181, 'data-value': derived.doubled }, children);
}
export default Component30181;
