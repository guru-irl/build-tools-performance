import React from 'react';
const LABEL_35148 = 'component_35148';
export function Component35148({ value = 35148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35148, 'data-value': derived.doubled }, children);
}
export default Component35148;
