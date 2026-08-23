import React from 'react';
const LABEL_21023 = 'component_21023';
export function Component21023({ value = 21023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21023, 'data-value': derived.doubled }, children);
}
export default Component21023;
