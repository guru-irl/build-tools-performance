import React from 'react';
const LABEL_3733 = 'component_3733';
export function Component3733({ value = 3733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3733, 'data-value': derived.doubled }, children);
}
export default Component3733;
