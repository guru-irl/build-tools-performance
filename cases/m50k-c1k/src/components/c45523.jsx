import React from 'react';
const LABEL_45523 = 'component_45523';
export function Component45523({ value = 45523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45523, 'data-value': derived.doubled }, children);
}
export default Component45523;
