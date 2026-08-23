import React from 'react';
const LABEL_28298 = 'component_28298';
export function Component28298({ value = 28298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28298, 'data-value': derived.doubled }, children);
}
export default Component28298;
