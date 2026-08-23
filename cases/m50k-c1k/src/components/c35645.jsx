import React from 'react';
const LABEL_35645 = 'component_35645';
export function Component35645({ value = 35645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35645, 'data-value': derived.doubled }, children);
}
export default Component35645;
