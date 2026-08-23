import React from 'react';
const LABEL_42752 = 'component_42752';
export function Component42752({ value = 42752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42752, 'data-value': derived.doubled }, children);
}
export default Component42752;
