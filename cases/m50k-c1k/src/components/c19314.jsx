import React from 'react';
const LABEL_19314 = 'component_19314';
export function Component19314({ value = 19314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19314, 'data-value': derived.doubled }, children);
}
export default Component19314;
