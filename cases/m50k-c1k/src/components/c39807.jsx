import React from 'react';
const LABEL_39807 = 'component_39807';
export function Component39807({ value = 39807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39807, 'data-value': derived.doubled }, children);
}
export default Component39807;
