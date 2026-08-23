import React from 'react';
const LABEL_10298 = 'component_10298';
export function Component10298({ value = 10298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10298, 'data-value': derived.doubled }, children);
}
export default Component10298;
