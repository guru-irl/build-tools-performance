import React from 'react';
const LABEL_10067 = 'component_10067';
export function Component10067({ value = 10067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10067, 'data-value': derived.doubled }, children);
}
export default Component10067;
