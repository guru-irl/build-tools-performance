import React from 'react';
const LABEL_34292 = 'component_34292';
export function Component34292({ value = 34292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34292, 'data-value': derived.doubled }, children);
}
export default Component34292;
