import React from 'react';
const LABEL_10181 = 'component_10181';
export function Component10181({ value = 10181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10181, 'data-value': derived.doubled }, children);
}
export default Component10181;
