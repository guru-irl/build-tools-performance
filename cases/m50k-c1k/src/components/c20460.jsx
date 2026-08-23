import React from 'react';
const LABEL_20460 = 'component_20460';
export function Component20460({ value = 20460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20460, 'data-value': derived.doubled }, children);
}
export default Component20460;
