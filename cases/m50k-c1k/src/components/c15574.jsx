import React from 'react';
const LABEL_15574 = 'component_15574';
export function Component15574({ value = 15574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15574, 'data-value': derived.doubled }, children);
}
export default Component15574;
