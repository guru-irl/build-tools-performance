import React from 'react';
const LABEL_33818 = 'component_33818';
export function Component33818({ value = 33818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33818, 'data-value': derived.doubled }, children);
}
export default Component33818;
