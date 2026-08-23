import React from 'react';
const LABEL_19284 = 'component_19284';
export function Component19284({ value = 19284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19284, 'data-value': derived.doubled }, children);
}
export default Component19284;
