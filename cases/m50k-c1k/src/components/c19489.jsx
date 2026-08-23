import React from 'react';
const LABEL_19489 = 'component_19489';
export function Component19489({ value = 19489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19489, 'data-value': derived.doubled }, children);
}
export default Component19489;
