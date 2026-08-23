import React from 'react';
const LABEL_20350 = 'component_20350';
export function Component20350({ value = 20350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20350, 'data-value': derived.doubled }, children);
}
export default Component20350;
