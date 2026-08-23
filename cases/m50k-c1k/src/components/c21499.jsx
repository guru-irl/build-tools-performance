import React from 'react';
const LABEL_21499 = 'component_21499';
export function Component21499({ value = 21499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21499, 'data-value': derived.doubled }, children);
}
export default Component21499;
