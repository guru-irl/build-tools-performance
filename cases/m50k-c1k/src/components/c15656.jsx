import React from 'react';
const LABEL_15656 = 'component_15656';
export function Component15656({ value = 15656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15656, 'data-value': derived.doubled }, children);
}
export default Component15656;
