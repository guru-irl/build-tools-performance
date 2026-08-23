import React from 'react';
const LABEL_20373 = 'component_20373';
export function Component20373({ value = 20373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20373, 'data-value': derived.doubled }, children);
}
export default Component20373;
