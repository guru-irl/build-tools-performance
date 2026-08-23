import React from 'react';
const LABEL_35441 = 'component_35441';
export function Component35441({ value = 35441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35441, 'data-value': derived.doubled }, children);
}
export default Component35441;
