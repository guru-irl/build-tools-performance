import React from 'react';
const LABEL_15919 = 'component_15919';
export function Component15919({ value = 15919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15919, 'data-value': derived.doubled }, children);
}
export default Component15919;
