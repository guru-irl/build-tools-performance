import React from 'react';
const LABEL_45625 = 'component_45625';
export function Component45625({ value = 45625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45625, 'data-value': derived.doubled }, children);
}
export default Component45625;
