import React from 'react';
const LABEL_13786 = 'component_13786';
export function Component13786({ value = 13786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13786, 'data-value': derived.doubled }, children);
}
export default Component13786;
