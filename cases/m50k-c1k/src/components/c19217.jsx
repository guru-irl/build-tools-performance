import React from 'react';
const LABEL_19217 = 'component_19217';
export function Component19217({ value = 19217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19217, 'data-value': derived.doubled }, children);
}
export default Component19217;
