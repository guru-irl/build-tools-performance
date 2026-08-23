import React from 'react';
const LABEL_39554 = 'component_39554';
export function Component39554({ value = 39554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39554, 'data-value': derived.doubled }, children);
}
export default Component39554;
