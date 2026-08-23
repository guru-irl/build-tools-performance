import React from 'react';
const LABEL_11859 = 'component_11859';
export function Component11859({ value = 11859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11859, 'data-value': derived.doubled }, children);
}
export default Component11859;
