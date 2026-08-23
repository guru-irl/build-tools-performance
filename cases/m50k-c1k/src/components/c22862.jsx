import React from 'react';
const LABEL_22862 = 'component_22862';
export function Component22862({ value = 22862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22862, 'data-value': derived.doubled }, children);
}
export default Component22862;
