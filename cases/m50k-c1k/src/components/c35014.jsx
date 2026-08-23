import React from 'react';
const LABEL_35014 = 'component_35014';
export function Component35014({ value = 35014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35014, 'data-value': derived.doubled }, children);
}
export default Component35014;
