import React from 'react';
const LABEL_22656 = 'component_22656';
export function Component22656({ value = 22656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22656, 'data-value': derived.doubled }, children);
}
export default Component22656;
