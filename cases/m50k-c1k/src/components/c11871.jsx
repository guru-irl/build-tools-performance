import React from 'react';
const LABEL_11871 = 'component_11871';
export function Component11871({ value = 11871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11871, 'data-value': derived.doubled }, children);
}
export default Component11871;
