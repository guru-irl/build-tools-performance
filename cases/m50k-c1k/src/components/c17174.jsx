import React from 'react';
const LABEL_17174 = 'component_17174';
export function Component17174({ value = 17174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17174, 'data-value': derived.doubled }, children);
}
export default Component17174;
