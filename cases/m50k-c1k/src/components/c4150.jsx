import React from 'react';
const LABEL_4150 = 'component_4150';
export function Component4150({ value = 4150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4150, 'data-value': derived.doubled }, children);
}
export default Component4150;
