import React from 'react';
const LABEL_20219 = 'component_20219';
export function Component20219({ value = 20219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20219, 'data-value': derived.doubled }, children);
}
export default Component20219;
