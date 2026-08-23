import React from 'react';
const LABEL_14910 = 'component_14910';
export function Component14910({ value = 14910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14910, 'data-value': derived.doubled }, children);
}
export default Component14910;
