import React from 'react';
const LABEL_19704 = 'component_19704';
export function Component19704({ value = 19704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19704, 'data-value': derived.doubled }, children);
}
export default Component19704;
