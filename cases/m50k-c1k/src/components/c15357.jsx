import React from 'react';
const LABEL_15357 = 'component_15357';
export function Component15357({ value = 15357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15357, 'data-value': derived.doubled }, children);
}
export default Component15357;
