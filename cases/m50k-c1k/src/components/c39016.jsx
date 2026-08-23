import React from 'react';
const LABEL_39016 = 'component_39016';
export function Component39016({ value = 39016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39016, 'data-value': derived.doubled }, children);
}
export default Component39016;
