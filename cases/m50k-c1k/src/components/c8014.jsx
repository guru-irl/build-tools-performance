import React from 'react';
const LABEL_8014 = 'component_8014';
export function Component8014({ value = 8014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8014, 'data-value': derived.doubled }, children);
}
export default Component8014;
