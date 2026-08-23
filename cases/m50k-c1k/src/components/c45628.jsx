import React from 'react';
const LABEL_45628 = 'component_45628';
export function Component45628({ value = 45628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45628, 'data-value': derived.doubled }, children);
}
export default Component45628;
