import React from 'react';
const LABEL_29067 = 'component_29067';
export function Component29067({ value = 29067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29067, 'data-value': derived.doubled }, children);
}
export default Component29067;
