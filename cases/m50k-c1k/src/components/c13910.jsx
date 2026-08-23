import React from 'react';
const LABEL_13910 = 'component_13910';
export function Component13910({ value = 13910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13910, 'data-value': derived.doubled }, children);
}
export default Component13910;
