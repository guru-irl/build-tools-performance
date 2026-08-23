import React from 'react';
const LABEL_5786 = 'component_5786';
export function Component5786({ value = 5786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5786, 'data-value': derived.doubled }, children);
}
export default Component5786;
