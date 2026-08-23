import React from 'react';
const LABEL_45435 = 'component_45435';
export function Component45435({ value = 45435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45435, 'data-value': derived.doubled }, children);
}
export default Component45435;
