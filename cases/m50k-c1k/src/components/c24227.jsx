import React from 'react';
const LABEL_24227 = 'component_24227';
export function Component24227({ value = 24227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24227, 'data-value': derived.doubled }, children);
}
export default Component24227;
