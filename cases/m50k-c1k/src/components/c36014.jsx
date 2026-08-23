import React from 'react';
const LABEL_36014 = 'component_36014';
export function Component36014({ value = 36014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36014, 'data-value': derived.doubled }, children);
}
export default Component36014;
