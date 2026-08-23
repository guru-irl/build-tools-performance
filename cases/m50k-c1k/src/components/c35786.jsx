import React from 'react';
const LABEL_35786 = 'component_35786';
export function Component35786({ value = 35786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35786, 'data-value': derived.doubled }, children);
}
export default Component35786;
