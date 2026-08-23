import React from 'react';
const LABEL_15412 = 'component_15412';
export function Component15412({ value = 15412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15412, 'data-value': derived.doubled }, children);
}
export default Component15412;
