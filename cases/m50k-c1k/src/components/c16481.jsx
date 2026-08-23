import React from 'react';
const LABEL_16481 = 'component_16481';
export function Component16481({ value = 16481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16481, 'data-value': derived.doubled }, children);
}
export default Component16481;
