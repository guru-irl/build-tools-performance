import React from 'react';
const LABEL_19762 = 'component_19762';
export function Component19762({ value = 19762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19762, 'data-value': derived.doubled }, children);
}
export default Component19762;
