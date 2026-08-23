import React from 'react';
const LABEL_3225 = 'component_3225';
export function Component3225({ value = 3225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3225, 'data-value': derived.doubled }, children);
}
export default Component3225;
